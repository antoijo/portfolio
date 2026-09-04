// Audit Lighthouse (perf / a11y / SEO / best-practices) d'une page du site.
//
// Démarre un serveur statique local, lance Lighthouse via le Chromium de
// Playwright, écrit un rapport HTML et affiche les scores.
//
// Usage:
//   node tools/audit.mjs            # audite /index.html
//   node tools/audit.mjs about.html
import { chromium } from 'playwright';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, basename } from 'node:path';
import { mkdirSync, writeFileSync } from 'node:fs';
import { once } from 'node:events';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const reportDir = resolve(root, 'tools/reports');
mkdirSync(reportDir, { recursive: true });

const target = (process.argv[2] || 'index.html').replace(/^\//, '');
const PORT = 8123;

// Serveur statique
const server = spawn('python3', ['-m', 'http.server', String(PORT)], { cwd: root, stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 800));

const chrome = await chromeLauncher.launch({
  chromePath: chromium.executablePath(),
  chromeFlags: ['--headless=new', '--no-sandbox'],
});

try {
  const url = `http://localhost:${PORT}/${target}`;
  const { lhr, report } = await lighthouse(url, {
    port: chrome.port,
    output: 'html',
    logLevel: 'error',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  });

  const name = basename(target).replace(/\.[^.]+$/, '') || 'page';
  const reportPath = resolve(reportDir, `${name}.report.html`);
  writeFileSync(reportPath, Array.isArray(report) ? report[0] : report);

  console.log(`\nScores — ${url}`);
  for (const [id, cat] of Object.entries(lhr.categories)) {
    const score = Math.round((cat.score ?? 0) * 100);
    console.log(`  ${cat.title.padEnd(16)} ${score}`);
  }
  console.log(`\nRapport: ${reportPath}`);
} finally {
  await chrome.kill();
  server.kill();
}
