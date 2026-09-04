# antoinejosnin.fr — Portfolio d'Antoine Josnin

Site personnel d'Antoine Josnin, Product Engineer / CTO indépendant (Lyon — Savoie),
co-fondateur du collectif [Akago](https://akago.fr). Porte d'entrée business jumelle
d'akago.fr, pour ceux qui cherchent **un freelance plutôt qu'une équipe** : un accueil
long, une page par projet, un objectif (la visio découverte de 30 min).

- **Spécification et maquettes** : [`design/handoff/README.md`](design/handoff/README.md)
  (écrans retenus, tokens, composants, SEO) et [`design/handoff/TODO.md`](design/handoff/TODO.md)
  (travail restant côté code et côté contenu). Le canvas
  `design/handoff/Portfolio Antoine Josnin.dc.html` s'ouvre dans un navigateur via
  le serveur local ; les options retenues portent les badges listés dans le README.
- **Journal de bootstrap** : [`docs/BOOTSTRAP.md`](docs/BOOTSTRAP.md) (décisions,
  DNS, activation de GitHub Pages, étapes suivantes).
- **Conventions de code** : [`CLAUDE.md`](CLAUDE.md).

## Pile

HTML et CSS écrits à la main, **aucun framework, aucun build**. Une seule feuille
`styles.css`, un `site.js` minimal (menu mobile, portrait, mosaïques), polices
self-hostées, Plausible sans cookies, formulaire de réservation Tally.

## Structure

```
index.html                 accueil (maquettes 1d desktop / 4a mobile)
projets/<slug>/index.html  une page par projet (gabarit 3a / 7a)
styles.css · site.js       feuille unique, script minimal
assets/                    people · showcase · icons · clients · akago · fonts · badges
og/                        images Open Graph 1200×630 (accueil + une par projet)
design/handoff/            handoff Claude Design (référence, non publié)
tools/                     capture (shot.mjs) et audit Lighthouse (audit.mjs)
docs/                      journal de bootstrap
```

## Développement

```bash
npm run serve            # http://localhost:7364
npm install              # une fois, pour shot / audit (Playwright + Lighthouse)
npm run shot index.html  # captures desktop 1280 + mobile 390 -> tools/screenshots/
npm run audit index.html # Lighthouse (perf / a11y / SEO / bonnes pratiques) -> tools/reports/
```

## Déploiement

Hébergé sur **GitHub Pages** depuis `main` / racine (dépôt
[antoijo/portfolio](https://github.com/antoijo/portfolio)), domaine
**https://antoinejosnin.fr** (`CNAME`), DNS chez Scaleway. Chaque `git push` sur
`main` redéploie ; `_config.yml` exclut de la publication tout ce qui n'est pas le
site (`design/`, `tools/`, `docs/`, README, package). Détail des enregistrements
DNS et de l'activation dans [`docs/BOOTSTRAP.md`](docs/BOOTSTRAP.md).
