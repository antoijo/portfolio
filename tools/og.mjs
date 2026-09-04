// Génère les images Open Graph (1200×630, d'après les maquettes 8a / 8b) et les
// icônes (favicon, apple-touch-icon, manifest) en rendant du HTML avec Playwright.
//
// Usage :
//   node tools/og.mjs            # tout
//   node tools/og.mjs accueil    # une seule image (accueil, libelaw, ping, …, icons)
//
// Sortie : og/<slug>.png, favicon-32.png, favicon-192.png, favicon-512.png,
// apple-touch-icon.png, favicon.ico.
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const asset = (p) => pathToFileURL(resolve(root, p)).href;
mkdirSync(resolve(root, 'og'), { recursive: true });

const PORTRAIT = asset('assets/people/antoine-josnin-detoure.png');

const fonts = `
@font-face{font-family:"Bricolage Grotesque";font-weight:500 800;src:url(${asset('assets/fonts/bricolage-grotesque-latin.woff2')}) format("woff2")}
@font-face{font-family:"DM Sans";font-weight:400 600;src:url(${asset('assets/fonts/dm-sans-latin.woff2')}) format("woff2")}
@font-face{font-family:"JetBrains Mono";font-weight:400 500;src:url(${asset('assets/fonts/jetbrains-mono-latin.woff2')}) format("woff2")}
*{box-sizing:border-box}body{margin:0;font-family:"DM Sans",sans-serif;color:#1A1614;-webkit-font-smoothing:antialiased}
h1,p{margin:0}.mono{font-family:"JetBrains Mono",monospace}
.portrait{border-radius:50%;overflow:hidden;flex:none;transform:rotate(-12deg)}
.portrait img{width:100%;height:100%;object-fit:cover;object-position:50% 20%;transform:scale(1.35) translateY(4%);display:block}
.og{width:1200px;height:630px;position:relative;overflow:hidden}
.col{position:absolute;left:72px;top:64px;bottom:64px;display:flex;flex-direction:column;justify-content:space-between}
.right{position:absolute;top:0;bottom:0;right:0}
.right > img,.right > .phone{position:absolute;display:block}
.desktop{border-radius:14px;box-shadow:0 30px 70px -30px rgba(26,22,20,.45);background:#fff}
.phone{border-radius:30px;border:7px solid #1A1614;box-shadow:0 30px 70px -30px rgba(26,22,20,.45);background:#fff;overflow:hidden}
.phone img{display:block;width:100%}
.tablet{border-radius:22px;border:9px solid #1A1614;box-shadow:0 30px 70px -30px rgba(26,22,20,.45);background:#000}
`;

const shot = (s) => {
  const style = `left:${s.left}px;top:${s.top}px;width:${s.width}px;transform:rotate(${s.rotate}deg)`;
  if (s.kind === 'mobile') return `<div class="phone" style="${style};background:${s.bg || '#fff'}"><img src="${asset(s.src)}"></div>`;
  return `<img class="${s.kind}" src="${asset(s.src)}" style="${style}">`;
};

const home = () => `
<div class="og" style="background:#FBF7F0">
  <div class="col" style="width:560px">
    <div style="display:flex;align-items:center;gap:18px">
      <div class="portrait" style="width:72px;height:72px"><img src="${PORTRAIT}"></div>
      <div style="display:flex;flex-direction:column;gap:2px">
        <div style="font-family:'Bricolage Grotesque';font-weight:700;font-size:26px;letter-spacing:-.02em">Antoine Josnin</div>
        <div class="mono" style="font-size:14px;color:#2F7FCB">Product Engineer / CTO</div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:22px">
      <h1 style="font-family:'Bricolage Grotesque';font-weight:800;font-size:72px;line-height:.96;letter-spacing:-.04em;text-wrap:balance">Je m'occupe du produit autant que du code.</h1>
      <p style="font-size:22px;line-height:1.4;color:#5A544E;text-wrap:pretty">App mobile, web &amp; SaaS. Un seul interlocuteur, du premier atelier au store.</p>
    </div>
    <div class="mono" style="display:flex;align-items:center;gap:14px;font-size:14px;color:#5A544E"><span style="color:#1A1614;font-weight:500">antoinejosnin.fr</span><span>·</span><span>Lyon — Savoie, à distance partout en France</span></div>
  </div>
  <div class="right" style="left:690px">
    ${shot({ kind: 'desktop', src: 'assets/showcase/desktop-libelaw-dashboard.webp', left: 0, top: 110, width: 560, rotate: -4 })}
    ${shot({ kind: 'mobile', src: 'assets/showcase/mobile-ping-home.webp', left: 330, top: 250, width: 190, rotate: 6 })}
  </div>
</div>`;

const project = (p) => `
<div class="og" style="background:${p.bg}">
  <div class="col" style="width:520px">
    <div style="display:flex;align-items:center;gap:14px">
      <img src="${asset(p.icon)}" style="width:56px;height:56px;border-radius:16px;object-fit:contain;${p.framed ? 'background:#fff;border:1px solid #E6E0D4;padding:7px' : ''}">
      <div class="mono" style="font-size:14px;color:#5A544E">${p.kicker}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:20px">
      <h1 style="font-family:'Bricolage Grotesque';font-weight:800;font-size:${p.titleSize || 96}px;line-height:.94;letter-spacing:-.045em">${p.title}</h1>
      <p style="font-size:24px;line-height:1.35;color:#5A544E;text-wrap:pretty">${p.lead}</p>
    </div>
    <div style="display:flex;align-items:center;gap:14px">
      <div class="portrait" style="width:44px;height:44px"><img src="${PORTRAIT}"></div>
      <div class="mono" style="font-size:14px;color:#5A544E"><span style="color:#1A1614;font-weight:500">Antoine Josnin</span> · Product Engineer / CTO · antoinejosnin.fr</div>
    </div>
  </div>
  <div class="right" style="left:660px">${p.shots.map(shot).join('')}</div>
</div>`;

const projects = {
  libelaw: { bg: '#E8EEF5', icon: 'assets/icons/libelaw.png', kicker: 'LegalTech · SaaS web + mobile · en production depuis avril 2025', title: 'Libélaw', lead: 'Le réseau de confiance entre avocats pour la postulation et la substitution.', shots: [
    { kind: 'desktop', src: 'assets/showcase/desktop-libelaw-dashboard.webp', left: 0, top: 90, width: 600, rotate: -4 },
    { kind: 'mobile', src: 'assets/showcase/mobile-libelaw-mission.webp', left: 360, top: 260, width: 190, rotate: 6 }] },
  ping: { bg: '#EFE7DA', icon: 'assets/icons/ping.png', framed: true, kicker: 'App sociale · iOS + Android · fév. → avr. 2026', title: 'Ping', lead: 'Les rencontres dans la vraie vie, dans des lieux partenaires.', shots: [
    { kind: 'mobile', src: 'assets/showcase/mobile-ping-venue.webp', left: 40, top: 70, width: 230, rotate: -6 },
    { kind: 'mobile', src: 'assets/showcase/mobile-ping-home.webp', left: 300, top: 40, width: 250, rotate: 4 }] },
  moofize: { bg: '#E4EEE9', icon: 'assets/icons/moofize.png', framed: true, kicker: 'Santé B2B · plateforme web · CTO & lead dev depuis 2020', title: 'Moofize', lead: 'Le point de rencontre entre professionnels de santé et industrie de la santé.', shots: [
    { kind: 'desktop', src: 'assets/showcase/desktop-moofize-messenger.webp', left: 0, top: 60, width: 520, rotate: -4 },
    { kind: 'desktop', src: 'assets/showcase/desktop-moofize-dashboard.webp', left: 180, top: 250, width: 520, rotate: 4 }] },
  famyhelp: { bg: '#F3E8E4', icon: 'assets/icons/famyhelp.png', framed: true, kicker: 'Aidants familiaux · web, iOS, Android · 2020 → 2023', title: 'FamyHelp', lead: 'La première application 100 % gratuite dédiée aux aidants.', shots: [
    { kind: 'mobile', src: 'assets/showcase/mobile-famyhelp-demandes.webp', left: 40, top: 70, width: 230, rotate: -6 },
    { kind: 'mobile', src: 'assets/showcase/mobile-famyhelp-map.webp', left: 300, top: 40, width: 250, rotate: 4 }] },
  mybul: { bg: '#E3EDF0', icon: 'assets/clients/bulle-autonomie.png', framed: true, kicker: "Bulle d'Autonomie · aidants familiaux · mobile + web", title: 'MyBul', lead: "L'outil qui relie les proches aidants à leur coordinatrice autonomie, et les entreprises à leurs salariés aidants.", shots: [
    { kind: 'desktop', src: 'assets/showcase/mybul-web-accueil.webp', left: 0, top: 90, width: 600, rotate: -4 },
    { kind: 'mobile', src: 'assets/showcase/mybul-mobile-dashboard.webp', left: 360, top: 260, width: 190, rotate: 6 }] },
  yippylingo: { bg: '#FBEBD5', icon: 'assets/icons/yippylingo-logo.png', kicker: "Éducation · kit d'anglais pour enfants · app compagnon", title: 'YippyLingo', titleSize: 84, lead: "Chaque mois un kit physique arrive à la maison ; l'app est la clé qui le déverrouille.", shots: [
    { kind: 'mobile', src: 'assets/showcase/yippylingo-product-page.webp', left: 40, top: 70, width: 230, rotate: -6, bg: '#1A1614' },
    { kind: 'mobile', src: 'assets/showcase/yippylingo-homepage.webp', left: 300, top: 40, width: 250, rotate: 4, bg: '#1A1614' }] },
  diagoplus: { bg: '#EDEBE9', icon: 'assets/icons/diagoplus.svg', framed: true, kicker: 'BTP · diagnostic avant travaux · app terrain + SaaS web', title: 'Diagoplus', lead: "L'outil des diagnostiqueurs plomb et amiante : la saisie sur le chantier, la restitution au bureau.", shots: [
    { kind: 'desktop', src: 'assets/showcase/diagoplus-web-odm-detail.webp', left: 0, top: 90, width: 600, rotate: -4 },
    { kind: 'mobile', src: 'assets/showcase/diagoplus-mobile-repere.webp', left: 360, top: 260, width: 190, rotate: 6 }] },
  leezay: { bg: '#E4EEEB', icon: 'assets/icons/leezay.png', framed: true, kicker: 'Courtage en assurance-crédit · SaaS web B2B · 2026', title: 'Leezay', lead: "Une PME dépose une facture client et obtient un devis d'assurance en quelques secondes.", shots: [
    { kind: 'desktop', src: 'assets/showcase/leezay-assure-devis.webp', left: 0, top: 60, width: 520, rotate: -4 },
    { kind: 'desktop', src: 'assets/showcase/desktop-leezay-dashboard.webp', left: 180, top: 250, width: 520, rotate: 4 }] },
  filou: { bg: '#FCEDCB', icon: 'assets/icons/filou.png', kicker: 'Projet personnel · app iPad et iPhone · 3–8 ans', title: 'Filou', lead: 'La journée des petits, étape par étape. Un ver qui avance sur le chemin de la journée.', shots: [
    { kind: 'tablet', src: 'assets/showcase/filou-ipad-enfant.webp', left: 0, top: 90, width: 600, rotate: -4 },
    { kind: 'mobile', src: 'assets/showcase/filou-iphone-enfant.webp', left: 380, top: 280, width: 170, rotate: 6, bg: '#000' }] },
};

// Icône : monogramme « AJ » Bricolage 800 sur accent (README § Favicon).
const icon = (size) => `
<div style="width:${size}px;height:${size}px;background:#2F7FCB;display:grid;place-items:center;border-radius:${size >= 180 ? 0 : Math.round(size * .22)}px">
  <span style="font-family:'Bricolage Grotesque';font-weight:800;font-size:${Math.round(size * .56)}px;letter-spacing:-.06em;color:#FBF7F0;line-height:1;transform:translateY(${Math.round(size * .02)}px)">AJ</span>
</div>`;

function icoFromPng(png, size) {
  // Conteneur ICO avec une seule entrée PNG (accepté par tous les navigateurs modernes).
  const header = Buffer.alloc(6 + 16);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
  header.writeUInt8(size >= 256 ? 0 : size, 6); header.writeUInt8(size >= 256 ? 0 : size, 7);
  header.writeUInt8(0, 8); header.writeUInt8(0, 9); header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

const only = process.argv[2];
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const render = async (html, out, selector = '.og') => {
    const tmp = resolve(tmpdir(), `og-${Date.now()}.html`);
    writeFileSync(tmp, `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${fonts}</style></head><body>${html}</body></html>`);
    await page.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.locator(selector).screenshot({ path: out });
    console.log(`✓ ${out}`);
  };
  if (!only || only === 'accueil') await render(home(), resolve(root, 'og/accueil.png'));
  for (const [slug, p] of Object.entries(projects)) {
    if (!only || only === slug) await render(project(p), resolve(root, `og/${slug}.png`));
  }
  if (!only || only === 'icons') {
    for (const size of [32, 192, 512, 180]) {
      const out = resolve(root, size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`);
      await render(icon(size), out, 'div');
    }
    writeFileSync(resolve(root, 'favicon.ico'), icoFromPng(readFileSync(resolve(root, 'favicon-32.png')), 32));
    console.log('✓ favicon.ico');
  }
} finally {
  await browser.close();
}
