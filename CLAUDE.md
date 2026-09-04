# antoinejosnin.fr — Portfolio personnel

Site **statique** d'Antoine Josnin (Product Engineer / CTO indépendant). Cousin du
site Akago (`~/Developer/akago/akago_landing`), pas un clone : même famille
typographique, palette crème, **accent bleu** `#2F7FCB` au lieu de l'orange Akago.

## Source de vérité

- **`design/handoff/README.md`** : écrans retenus (badges `1d`, `4a`, `3a`, `7a`…),
  tokens, composants, interactions, SEO. Fidélité **haute** : reproduire au pixel
  sur 1280 (desktop) et 390 (mobile), puis fluide entre les deux.
- **`design/handoff/TODO.md`** : reste à faire, dont les items ⏳ bloqués par un
  contenu ou un accord client qu'Antoine doit fournir.
- Les **textes** se reprennent au caractère près depuis le canvas. Ne jamais
  inventer de copy ; les trous sont marqués `[à compléter]` / `[à préciser]`.

## Pile

- HTML écrit à la main, **aucun framework, aucun build**, `lang="fr"`.
- Un seul `styles.css` (< 30 ko), CSS vanilla, tokens dans `:root`. Sections
  balisées par des bandeaux `/* ===== ZONE ===== */`.
- `site.js` (< 3 ko) : menu mobile (focus piégé, `Esc`, `inert`), cycle d'angle du
  portrait, cycle des captures dans les mosaïques, Plausible. Tout doit rester
  lisible et navigable sans JS.
- Polices self-hostées en woff2 (Bricolage Grotesque variable, DM Sans variable,
  JetBrains Mono 400/500), sous-ensemble latin, `preload` des critiques.
- Formulaires délégués à Tally ; contact en `mailto:`.

## Conventions

- **Tokens** : toute couleur, taille, rayon ou ombre passe par les variables de
  `:root` (tableau du handoff). Pas de valeur en dur dans les règles.
- Conteneur 1280 avec gouttières 56 px (contenu 1168), 20 px en mobile.
- `text-wrap: balance` sur les titres, `pretty` sur les paragraphes ;
  `prefers-reduced-motion` respecté (ni translation ni rotation animée).
- Cibles tactiles ≥ 44 px, `focus-visible` partout, `aria-current` sur la nav,
  `alt` repris des maquettes, `width`/`height` sur toutes les images.
- Images en WebP (desktop ≤ 1600 px, mobile ≤ 800 px), `loading="lazy"` sauf hero.
- Une page projet = `projets/<slug>/index.html` ; chaînage « Projet suivant → »
  dans l'ordre du handoff. **Leezay** reste `noindex`, hors sitemap et non lié
  tant que l'accord client et la 1.0 ne sont pas là.
- Garder nav et footer identiques entre les pages.

## Développement

```bash
npm run serve            # http://localhost:7364
npm run shot index.html  # captures 1280 + 390 -> tools/screenshots/
npm run audit index.html # Lighthouse -> tools/reports/
```

Après une modif CSS/HTML, capturer et **regarder le rendu** plutôt que de
modifier à l'aveugle. Objectif Lighthouse ≥ 90 sur les 4 axes, mobile et desktop.

## Dépôt et déploiement

- GitHub Pages depuis `main` / racine, domaine `antoinejosnin.fr` (`CNAME`).
  `_config.yml` exclut `design/`, `tools/`, `docs/`, README et package de la
  publication : tout nouveau fichier hors site s'y ajoute.
- `design/handoff/uploads/` (visuels clients) est **hors git** : dépôt public,
  accords en attente. Source : le zip d'export Claude Design, cf. `docs/BOOTSTRAP.md`.
- Commits en français, titre seul, **jamais de signature** (`Co-Authored-By`,
  « Generated with Claude Code »). Demander avant de push.
