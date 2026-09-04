// Capture d'écran d'une page du site en desktop + mobile.
//
// Usage:
//   node tools/shot.mjs index.html            # fichier local -> file://
//   node tools/shot.mjs about.html legal.html # plusieurs pages
//   node tools/shot.mjs http://localhost:8000 # une URL servie
//
// Sortie: tools/screenshots/<nom>-<viewport>.png (pleine hauteur).
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
import { mkdirSync, existsSync } from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'tools/screenshots');
mkdirSync(outDir, { recursive: true });

const viewports = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 390, height: 844 }, // iPhone 14
};

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.error('Aucune page fournie. Ex: node tools/shot.mjs index.html');
  process.exit(1);
}

function toUrl(target) {
  if (/^https?:\/\//.test(target)) return target;
  const abs = resolve(root, target);
  if (!existsSync(abs)) throw new Error(`Introuvable: ${target}`);
  return pathToFileURL(abs).href;
}

// Force le chargement des images loading="lazy" avant la capture. Scroller ne
// suffit pas : les images jamais intersectées (défilé horizontal, éléments
// masqués selon le viewport) ne se chargeraient jamais — d'où le passage en
// eager, et une attente bornée pour ne pas bloquer sur une image cassée.
async function loadLazyImages(page) {
  await page.evaluate(async () => {
    for (const img of document.querySelectorAll('img[loading="lazy"]')) img.loading = 'eager';
    const pending = Array.from(document.images)
      .filter((img) => !img.complete)
      .map((img) => new Promise((r) => { img.onload = img.onerror = r; }));
    await Promise.race([
      Promise.all(pending),
      new Promise((r) => setTimeout(r, 5000)),
    ]);
  });
  await page.waitForLoadState('networkidle');
}

const browser = await chromium.launch();
try {
  for (const target of targets) {
    const url = toUrl(target);
    const name = basename(target).replace(/\.[^.]+$/, '') || 'page';
    for (const [vp, size] of Object.entries(viewports)) {
      const page = await browser.newPage({ viewport: size, deviceScaleFactor: 2 });
      await page.goto(url, { waitUntil: 'networkidle' });
      await loadLazyImages(page);
      const out = resolve(outDir, `${name}-${vp}.png`);
      await page.screenshot({ path: out, fullPage: true });
      await page.close();
      console.log(`✓ ${vp.padEnd(7)} ${out}`);
    }
  }
} finally {
  await browser.close();
}
