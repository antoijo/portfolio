# Plan de visibilité — antoinejosnin.fr

Calqué sur `akago_landing/PLAN-VISIBILITE.md` (phase 1 faite le 11/06/2026 pour
akago.fr). Établi le 4 septembre 2026, jour de la mise en ligne.

## Phase 1 — Fondations techniques

### Côté site (fait le 4 septembre 2026)

- [x] Titres et descriptions par page, `canonical`, `lang="fr"`, Open Graph et
      Twitter `summary_large_image`, images OG 1200×630 par page (`tools/og.mjs`).
- [x] `robots.txt` ouvert (sauf `/projets/leezay/`), `sitemap.xml` (8 URL).
- [x] JSON-LD : `Person` (+ `Occupation`, 3 `Service` en `makesOffer`, `worksFor`
      Akago, `sameAs` Malt / LinkedIn / akago.fr) et `WebSite` sur l'accueil ;
      `SoftwareApplication` + `BreadcrumbList` sur chaque page projet.
- [x] URL uniques : liens internes vers `/` et `/projets/<slug>/` (jamais
      `index.html`), pas de doublon `www` (redirection 301 vers l'apex).
- [x] Page `404.html` de marque, `noindex,follow`, chemins absolus.
- [x] `llms.txt` à la racine (résumé pour les assistants IA). À tenir à jour quand
      les pages ou les chiffres changent.
- [x] Plausible : script servi en local (`assets/js/stats.js`, comme akago.fr),
      événements `Visio` (CTA de réservation) et `Store` (badges stores).
- [x] Performance : Lighthouse mobile 94 / 100 / 100 / 100, polices préchargées,
      images WebP dimensionnées, `fetchpriority` sur l'image LCP.
- [x] HTTPS imposé.

### Côté Antoine (comptes)

- [x] **Google Search Console** (4/09 au soir) : propriété validée. Le jeton Google est
      posé des deux façons : enregistrement TXT `google-site-verification=…` à la racine
      de la zone Scaleway (propriété « Domaine ») et balise `<meta name="google-site-verification">`
      dans `index.html` (propriété « Préfixe d'URL »). Sitemap soumis.
- [ ] **Bing Webmaster Tools** : importer depuis Search Console (une fois la
      propriété validée) — c'est ce que consultent ChatGPT / Copilot.
- [ ] **Plausible** : ajouter le site `antoinejosnin.fr` au compte, créer les goals
      `Visio` et `Store` (Site Settings → Goals → Custom event).
- [ ] **Malt / LinkedIn** : pointer les profils vers `https://antoinejosnin.fr`
      (cohérence d'entité, backlinks).

## Phase 2 — Propositions (à valider)

- [x] **Titres orientés recherche** (4/09, validé par Antoine) : `<title>` de l'accueil
      « Antoine Josnin — Développeur Flutter freelance & CTO à temps partiel · Apps
      mobiles, web et SaaS · Lyon, Savoie », description et `og:title` alignés. Le
      libellé « Product Engineer / CTO » du handoff reste dans la page et en `jobTitle`.
- [x] **Backlink depuis akago.fr** (4/09, commit `e4d469f` d'akago_landing) : le nom
      d'Antoine pointe vers antoinejosnin.fr sur l'accueil (bloc équipe) et sur
      « À propos », et le JSON-LD `ProfessionalService` d'akago.fr déclare `founder`
      avec l'URL du portfolio.
- [ ] **Pages « réalisations » = déjà là** : les 8 pages projets répondent à la longue
      traîne (« application pour avocats », « app pour aidants »…). Compléter les
      résultats chiffrés (Ping, Moofize, FamyHelp) dès que fournis.
- [ ] **Guides** : akago.fr porte déjà les guides génériques (coût d'une app, MVP,
      CII…). Pour le portfolio, une ou deux pages « point de vue » (ex. « CTO à temps
      partiel : quand, pourquoi, combien ») auraient plus de sens que de dupliquer.
- [ ] **Google Business Profile** : inutile en doublon de la fiche Akago, sauf à
      vouloir une fiche « Antoine Josnin, consultant » distincte.

## Phase 3 — Mesure

- [ ] Revue mensuelle : requêtes et positions Search Console, conversions `Visio`
      dans Plausible, Core Web Vitals.
- [ ] Referrers IA dans Plausible (`claude.ai`, `chatgpt.com`, `perplexity.ai`).
