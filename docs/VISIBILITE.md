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

- [ ] **Google Search Console** : ajouter la propriété « Domaine » `antoinejosnin.fr`
      (validation par enregistrement TXT chez Scaleway, valeur fournie par Google),
      puis soumettre `https://antoinejosnin.fr/sitemap.xml`. Variante : propriété
      « Préfixe d'URL » + balise `google-site-verification` à me donner, je la pose.
- [ ] **Bing Webmaster Tools** : importer depuis Search Console (une fois la
      propriété validée) — c'est ce que consultent ChatGPT / Copilot.
- [ ] **Plausible** : ajouter le site `antoinejosnin.fr` au compte, créer les goals
      `Visio` et `Store` (Site Settings → Goals → Custom event).
- [ ] **Malt / LinkedIn** : pointer les profils vers `https://antoinejosnin.fr`
      (cohérence d'entité, backlinks).

## Phase 2 — Propositions (à valider)

- [ ] **Titres orientés recherche** : le `<title>` de l'accueil vient du handoff
      (« Product Engineer / CTO, apps mobiles, web & SaaS »). Ajouter le vocabulaire
      tapé par la cible (« freelance », « Flutter », « Lyon ») se discute : c'est de la
      copie, donc décision d'Antoine.
- [ ] **Backlink depuis akago.fr** : lier antoinejosnin.fr depuis la page équipe
      d'akago.fr (`about.html`) — le lien le plus naturel. Modification d'un autre
      projet, à faire sur feu vert.
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
