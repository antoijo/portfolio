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
- [~] Mesure d'audience : **aucune pour l'instant** (8/09). Le plan Plausible
      d'Antoine est limité à un site (akago.fr) ; le script et le proxy ont été
      retirés, les mentions légales disent « aucun outil de mesure d'audience ».
      Les attributs `data-event="Visio"` / `"Store"` restent sur les CTA pour
      rebrancher un outil plus tard (plan Plausible Growth ou auto-hébergement).
- [x] Performance : Lighthouse mobile 94 / 100 / 100 / 100, polices préchargées,
      images WebP dimensionnées, `fetchpriority` sur l'image LCP.
- [x] HTTPS imposé.

### Côté Antoine (comptes)

- [x] **Google Search Console** (4/09 au soir) : propriété validée. Le jeton Google est
      posé des deux façons : enregistrement TXT `google-site-verification=…` à la racine
      de la zone Scaleway (propriété « Domaine ») et balise `<meta name="google-site-verification">`
      dans `index.html` (propriété « Préfixe d'URL »). Sitemap soumis.
- [x] **Bing Webmaster Tools** (8/09) : propriété `antoinejosnin.fr` importée depuis
      Search Console, sitemap soumis et crawlé le 8/09 (statut Success, 9 URL
      découvertes). C'est ce que consultent ChatGPT / Copilot.
- [ ] **Mesure d'audience** : pas d'outil gratuit convaincant avec événements
      personnalisés (Umami Cloud : un seul site en gratuit, plus cher que Plausible
      au-delà). Options restantes : plan Plausible Growth, ou Umami/Plausible CE
      auto-hébergé sur un serveur Akago. En attente ; les `data-event` `Visio` /
      `Store` restent en place pour rebrancher.
- [x] **LinkedIn** (10/09) : `https://antoinejosnin.fr` ajouté dans les coordonnées du
      profil, type « Portfolio professionnel », à côté d'akago.fr (Entreprise).
- [ ] **Malt** : pas de champ site web sur un profil freelance (la section « Influence »
      n'accepte que Behance, GitHub et Stack Overflow). Seule voie : un élément de
      portfolio (titre + texte + image) qui mentionne l'URL. Décision d'Antoine.

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
      traîne (« application pour avocats », « app pour aidants »…). Les placeholders de
      résultats chiffrés (Ping, Moofize, FamyHelp) ont été retirés le 8/09, faute de
      chiffres ; à réintroduire si Antoine en obtient.
- [ ] **Guides** : akago.fr porte déjà les guides génériques (coût d'une app, MVP,
      CII…). Pour le portfolio, une ou deux pages « point de vue » (ex. « CTO à temps
      partiel : quand, pourquoi, combien ») auraient plus de sens que de dupliquer.
- [ ] **Google Business Profile** : inutile en doublon de la fiche Akago, sauf à
      vouloir une fiche « Antoine Josnin, consultant » distincte.

## Phase 3 — Mesure

- [ ] Revue mensuelle : requêtes et positions Search Console, conversions `Visio`
      dans Plausible, Core Web Vitals.
- [ ] Referrers IA dans Plausible (`claude.ai`, `chatgpt.com`, `perplexity.ai`).
