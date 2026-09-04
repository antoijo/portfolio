# Bootstrap (journal)

Amorçage du portfolio `antoinejosnin.fr`, démarré le 4 septembre 2026. Point de
reprise inter-sessions ; la spécification vit dans `design/handoff/`.

## Contexte

- **Dépôt** : [antoijo/portfolio](https://github.com/antoijo/portfolio), public,
  créé vide le 3 septembre 2026. Copie locale dans le hub `~/Developer/front/portfolio/`.
- **Domaine** : `antoinejosnin.fr`, enregistré chez Scaleway (NS `ns0/ns1.dom.scw.cloud`).
- **Genèse** : prompt rédigé à partir d'akago.fr, Malt et LinkedIn (session
  « Design de portfolio personnalisé », 3 septembre), maquettes réalisées dans
  Claude Design, handoff exporté le 4 septembre (`Antoine Josnin Porfolio.zip`).

## Décisions

| Sujet | Choix | Pourquoi |
|---|---|---|
| Hébergement | GitHub Pages, `main` / racine, build Jekyll « legacy » + `_config.yml` `exclude` | Même mécanique qu'akago.fr, `git push` = déploiement, zéro CI. Le `.nojekyll` suggéré par le handoff servirait tout le dépôt, y compris `design/`. |
| Arborescence | Site à la racine, `design/` + `tools/` + `docs/` exclus de la publication | Calque d'akago_landing, un seul niveau. |
| Handoff | `design/handoff/` versionné (canvas, README, TODO, portrait), **`uploads/` hors git** | Dépôt public ; les visuels Leezay, Ping, Moofize, FamyHelp, MyBul, Diagoplus attendent un accord écrit. Le canvas pointe `assets/…` en relatif : liens symboliques `design/handoff/assets/*` → `assets/*`. |
| Assets | `assets/{showcase,icons,clients,akago}` copiés depuis la copie locale d'akago_landing (déjà publics sur akago.fr), portrait détouré du handoff dans `assets/people/` | Évite un re-téléchargement ; source unique. |
| Outils | `tools/shot.mjs` (1280 + 390) et `tools/audit.mjs` repris d'akago_landing | Port local 7364 (`npm run serve`), entrée `portfolio-serve` dans `front/.claude/launch.json`. |
| Page provisoire | `index.html` minimal, `noindex` | Valider la chaîne Pages → DNS → HTTPS avant l'accueil réel. |

## DNS à poser chez Scaleway (zone `antoinejosnin.fr`)

| Type | Nom | Valeur |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `antoijo.github.io.` |

Vérification : `dig +short antoinejosnin.fr A` doit rendre les quatre IP, puis
GitHub émet le certificat (quelques minutes à une heure) et « Enforce HTTPS »
devient cochable.

## Activation de GitHub Pages (après le premier push)

```bash
gh api -X POST repos/antoijo/portfolio/pages -f 'source[branch]=main' -f 'source[path]=/'
gh api -X PUT repos/antoijo/portfolio/pages -f cname=antoinejosnin.fr
gh api repos/antoijo/portfolio/pages --jq '{status,cname,https_certificate:.https_certificate.state}'
gh api -X PUT repos/antoijo/portfolio/pages -F https_enforced=true   # une fois le certificat approuvé
```

## Étapes

1. ✅ **Socle** (4 septembre) : dépôt, `CNAME`, `_config.yml`, `.gitignore`, README,
   CLAUDE.md, outils, handoff, assets, page provisoire.
2. ✅ Push de `main` et activation de Pages avec le domaine (4 septembre, 16 h 30).
   ⏳ DNS Scaleway (tableau ci-dessus), puis certificat et « Enforce HTTPS ».
3. ✅ Polices woff2 (variables, sous-ensemble latin de Google Fonts, mêmes fichiers
   qu'akago.fr) + `styles.css` (tokens, reset, typographie, composants, responsive
   1280 → 390, reduced-motion). Visuels du handoff convertis en WebP (`cwebp -q 82`,
   desktop ≤ 1600 px, mobile 750–780 px).
4. ✅ Accueil desktop (`1d`) et mobile (`4a`), menu mobile (`7b`), `site.js`.
   **Déployé le 4 septembre à 17 h** (commit `f1b1337`).
5. ✅ Gabarit projet (`3a` / `7a`) et les 9 pages, badges stores officiels
   (`assets/badges/`), chaînage. MyBul, Diagoplus, Leezay gardés hors ligne
   (`docs/PUBLISH.md`). **Déployé à 17 h 15** (commit `debf6de`).
6. ✅ SEO : titres, descriptions, canonical, JSON-LD (`Person`, `SoftwareApplication`
   + `BreadcrumbList`), `sitemap.xml`, `robots.txt`, OG `8a` / `8b` rendues par
   `tools/og.mjs` (Playwright), favicon « AJ » (PNG 32/192/512, ICO, apple-touch 180),
   Plausible.
7. Qualité : Lighthouse ≥ 90 × 4, clavier, contrastes, validation HTML (Nu : OK sur
   les pages testées).
8. Contenus ⏳ (liste B du TODO) : disponibilité, chiffres par projet, URL de
   réservation (Calendly ou autre, à la place du Tally d'Akago), accords clients,
   portrait HD, logos HD. Questions ouvertes : `docs/QUESTIONS.md`.
