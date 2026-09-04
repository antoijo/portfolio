# Handoff : Portfolio Antoine Josnin — antoinejosnin.fr

## Vue d'ensemble

Portfolio personnel d'Antoine Josnin, Product Engineer / CTO indépendant (Lyon — Savoie), fondateur du collectif Akago. Objectif : convertir des porteurs de projet en visio de 30 min. Site statique, hébergé sur GitHub Pages depuis le dépôt `antoijo/portfolio`, domaine `antoinejosnin.fr`.

Contenu : un accueil long (11 sections), 9 pages projets, un menu mobile, une image Open Graph. Tout en français.

## À propos des fichiers de design

`Portfolio Antoine Josnin.dc.html` (+ `support.js`) est une **référence de design en HTML**, un canvas de travail avec plusieurs tours d'itération, pas du code à livrer. Ouvrez-le dans un navigateur : chaque option porte un badge (`1d`, `3a`, `4c`…). **Les options retenues sont listées ci-dessous ; les autres sont des explorations à ignorer.**

La tâche : **recréer ces écrans en site statique** (HTML + CSS, JS minimal), avec les conventions décrites ici. Aucun framework requis ; un générateur statique léger (Eleventy, Astro en mode static) est acceptable si cela aide à factoriser le gabarit projet, mais la sortie doit rester du HTML pur servi par GitHub Pages.

## Fidélité

**Haute fidélité.** Couleurs, typographies, espacements, rayons, textes et états interactifs sont définitifs. Reproduire au pixel sur les largeurs de référence (1280 desktop, 390 mobile) puis rendre fluide entre les deux. Les seuls éléments provisoires sont marqués `[à compléter]` / `[à préciser]` dans les maquettes et listés dans `TODO.md`.

## Écrans retenus (badges dans le canvas)

| Badge | Écran | Route cible |
|---|---|---|
| `1d` | Accueil desktop complet (hero `2a` inclus) | `/` |
| `4a` | Accueil mobile 390 px | `/` |
| `3a` | Projet Libélaw, desktop | `/projets/libelaw/` |
| `7a` | Projet Libélaw, mobile — **gabarit mobile pour toutes les pages projets** | — |
| `4c` | Projet Ping | `/projets/ping/` |
| `4d` | Projet Moofize | `/projets/moofize/` |
| `4e` | Projet FamyHelp | `/projets/famyhelp/` |
| `5a` | Projet MyBul | `/projets/mybul/` |
| `5b` | Projet YippyLingo | `/projets/yippylingo/` |
| `5c` | Projet Diagoplus | `/projets/diagoplus/` |
| `5d` | Projet Leezay (**à publier après accord client et sortie 1.0**) | `/projets/leezay/` |
| `6a` | Projet Filou | `/projets/filou/` |
| `7b` | Menu mobile ouvert | composant |
| `7c` | États interactifs (hover, focus, actif, reduced-motion) | référence |
| `4b` | Planche tokens + composants | référence |
| `8a` | Open Graph accueil 1200×630 | `/og/accueil.png` |
| `8b` | Open Graph page projet (gabarit à décliner) | `/og/<slug>.png` |

Options à ignorer : `1a`–`1c`, `2b`, `2c`, tout ce qui n'est pas dans ce tableau.

Chaînage « Projet suivant → » en bas de chaque page projet, dans cet ordre : Libélaw → Ping → Moofize → FamyHelp → MyBul → YippyLingo → Diagoplus → Leezay → Filou → Libélaw. Tant que Leezay n'est pas publié, sauter de Diagoplus à Filou.

## Design tokens

À déclarer en custom properties dans `:root`.

### Couleurs

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `#FBF7F0` | fond de page (crème) |
| `--surface` | `#FFFFFF` | cartes |
| `--ink` | `#1A1614` | texte, sections sombres, bordures fortes |
| `--muted` | `#5A544E` | texte secondaire (7,0:1 sur crème) |
| `--line` | `#E6E0D4` | bordures, filets |
| `--accent` | `#2F7FCB` | CTA, liens, étiquettes mono, numéros de section (4,6:1 sur blanc) |
| `--accent-hover` | `#256BB0` | hover CTA (5,6:1 sur blanc) |
| `--accent-link-hover` | `#1F5F9E` | hover liens texte |
| `--accent-light` | `#9CC9EE` | accent sur fond encre |
| `--shot-bg` | `#E8EEF5` | fond des mosaïques de captures, par défaut |

Fonds de mosaïque par projet (remplace `--shot-bg` sur la page concernée) : Ping `#EFE7DA` · Leezay `#E4EEEB` · Moofize `#E3EDF0` · FamyHelp `#F3E8E4` · YippyLingo `#FBEBD5` · MyBul `#E7F4FC` · Diagoplus `#EDEBE9` · Filou `#FCEDCB` (jour) / `#23284E` (nuit, section encre Filou avec `#12152B`, `#3A3F7A`, accents `#F5D089`). Les captures sont sur fond teinté, jamais sur blanc.

Ombres : captures desktop `0 24px 60px -24px rgba(26,22,20,.4)` · captures mobile `0 20px 50px -20px rgba(26,22,20,.4)`. Aucune autre ombre.

### Typographie

Trois familles, à **self-hoster en woff2** (voir TODO), `font-display: swap`.

- **Bricolage Grotesque** (variable, opsz 12–96, poids 500–800) : titres, chiffres, citations.
- **DM Sans** (variable, opsz 9–40, poids 400–600) : corps, boutons.
- **JetBrains Mono** 400–500 : étiquettes, métadonnées, dates, numéros de section.

| Token | Fonte | Taille / interligne / approche | Exemple |
|---|---|---|---|
| `display` | Bricolage 800 | 72 / .98 / −.04em (desktop) · 44 / .98 / −.035em (mobile) | Je m'occupe du produit autant que du code. |
| `h2` | Bricolage 800 | 48 / 1 / −.04em | Projets sélectionnés |
| `h3` | Bricolage 700 | 28 / 1.05 / −.03em (24 en mobile) | Cadrer et prototyper |
| `stat` | Bricolage 700 | 32 / 1 / −.03em | 15 ans |
| `quote` | Bricolage 500 | 22–24 / 1.3 / −.015em | « Livraison en avance… » |
| `lead` | DM Sans 400 | 22 / 1.4 (pages projets) · 19 / 1.5 (accueil) · 17 / 1.5 (mobile) | sous-titre |
| `body` | DM Sans 400 | 16–17 / 1.55 | paragraphes |
| `small` | DM Sans 400 | 14–15 / 1.5 | descriptions de cartes |
| `button` | DM Sans 600 | 16 / 1 | Réserver une visio |
| `meta` | JetBrains Mono 400 | 13 / 1.5 (12 et 11 pour les variantes) | Product Engineer / CTO |

`text-wrap: balance` sur les titres, `text-wrap: pretty` sur les paragraphes. `-webkit-font-smoothing: antialiased`.

### Espacements et rayons

- Gouttière desktop : `56px` de chaque côté, largeur de page 1280 (contenu max 1168). Mobile : `20px`.
- Rythme vertical entre sections : `96px` desktop, `64px` mobile. Entre hero et bandeau chiffres : `64px`.
- Grilles : services 3 colonnes gap 20 ; projets sélectionnés 2 colonnes gap 20 ; cartes compactes 3 colonnes gap 16 ; fiche problème/rôle/résultat 3 colonnes gap 56 ; méta projet 2 colonnes.
- Rayons : `28px` cartes et mosaïques, `18px` cartes compactes et cadres, `14px` petits cadres de captures, `10–12px` captures desktop, `26–28px` captures mobile (cadre téléphone : bordure `6px solid #1A1614`), `999px` boutons et pastilles, `50%` portrait.
- Filets : `1px solid #E6E0D4` partout ; séparateur avant le CTA final : `1px solid #1A1614`.

## Composants

### Navigation (haut de page)
Barre 22×56 px, filet bas. Gauche : portrait rond 36 px incliné −12° + « Antoine Josnin » (Bricolage 700, 18). Centre : Services · Réalisations · Méthode · Parcours · Contact (DM Sans 500, 15 ; ancres `#services` `#realisations` `#methode` `#parcours` `#contact`). Droite : CTA primaire « Réserver une visio ». Sur les pages projets, le centre devient « ← Réalisations » (lien vers `/#realisations`). Mobile : portrait 32 px + nom + bouton burger 44×44 (deux traits 22×2).

### Menu mobile (`7b`)
Plein écran crème. Liste : Services 01 · Réalisations 02 · Méthode 03 · Parcours 04 · Contact 05 (titre Bricolage 700 32, numéro mono accent). Puis Malt · LinkedIn · antoine@akago.fr, CTA pleine largeur « Réserver une visio de 30 min », et la ligne « Lyon · Chambéry · Annecy · Grenoble — à distance partout en France » en mono 12. Fermeture par croix 44×44, `Esc`, et clic sur un lien. Focus piégé dans le menu, `aria-expanded` sur le burger, `inert` sur le reste de la page.

### CTA primaire
Fond accent, texte blanc, padding `16px 26px`, rayon 999, DM Sans 600 16, `min-height: 52px`. Hover : fond `#256BB0` + `translateY(-1px)`. Focus-visible : anneau `3px solid #2F7FCB`, `outline-offset: 3px`. Actif : `scale(.98)`. Transition `160ms ease-out` sur transform + background. Sur fond encre : identique (accent sur encre).

### CTA secondaire
Bordure `1.5px solid #1A1614`, padding `15px 24px`, texte encre. Hover : fond encre, texte crème. Mêmes focus et actif.

### Liens texte
Accent, soulignement `1.5px`, `text-underline-offset: 4px`, apparaît au hover ; flèche « → » se décale de +4 px au hover. Liens nav : encre, soulignement au hover et sur la page courante (`aria-current="page"`).

### Portrait
Image détourée `assets/people/antoine-josnin-detoure.png` dans un cercle (`overflow: hidden`, `object-fit: cover`, `object-position: 50% 20%`, `transform: scale(1.35) translateY(4%)` sur l'image). Le cercle est incliné : repos −12°. Hero : 72 px, cliquable : chaque clic passe à l'angle suivant de la liste `[-12, 10, -4, 16, -18, 6]` (boucle). Hover : angle ramené vers −6°, curseur pointer. Nav : 36 px, non cliquable (c'est le lien accueil). Transition `transform 240ms cubic-bezier(.2,.8,.2,1)`. `aria-label="Changer l'angle du portrait"`, `role="button"`.

### Mosaïque de captures (hero et pages projets)
Conteneur `border-radius: 28px`, fond teinté, `overflow: hidden`, hauteur 600 px (desktop projets), 300 px (mobile). Captures en `position: absolute`, chacune légèrement tournée (−6° à +7°), avec les ombres ci-dessus. Captures desktop : `border-radius: 10px`, fond blanc. Captures mobile : cadre `6px solid #1A1614`, rayon 26–28. Cliquable : le clic fait passer la capture au premier plan (z-index) et affiche un indicateur mono « 1 / 3 → » (pastille crème bordée, en bas à gauche). Les positions exactes sont dans le HTML de chaque page ; les recadrages (captures qui dépassent du conteneur) sont volontaires.

### Bandeau chiffres
4 colonnes séparées par des filets : « 15 ans / d'expérience », « 20+ / structures accompagnées », « 4 ans / d'apps en production », « 5/5 / sur Malt, réponse en moins d'une heure ». Chiffre Bricolage 700 32–40, légende DM Sans 13–14 muted. Mobile : grille 2×2.

### Carte service
Fond blanc, bordure line, rayon 28, padding 32, `min-height: 340px`. Étiquette mono 12 accent (« 01 · Semaines 1 à 4 »), h3, paragraphe muted 16.

### Carte projet (projets sélectionnés)
Toute la carte est un lien (`<a>` bloc). Fond blanc, bordure line, rayon 28. Haut : zone de captures 378 px sur fond teinté, rayon 14 (captures tournées ±4°). Bas : ligne mono (catégorie · dates), h3 28, description muted 16, « Voir le projet → ». Hover : `translateY(-3px)`, bordure encre, captures qui se redressent à 0°. Focus-visible : anneau accent.

### Carte compacte
Bordure line, rayon 18, padding 22×24. Ligne 1 : icône 32 px (rayon 9, fond blanc, bordure line) + nom Bricolage 700 20 ; à droite, date mono 11 muted. Ligne 2 : description DM Sans 14 muted. Toute la carte est un lien.

### Témoignage
Fond blanc, bordure line, rayon 28, padding 36. Citation Bricolage 500 22 entre guillemets français « … ». Signature : icône 36 px + nom DM Sans 600 15 + source mono 12 muted.

### Fiche projet (pages projets)
Sous le hero, grille 2 colonnes séparée par des filets : Rôle · Période · Stack · Plateformes (étiquette mono 12 muted, valeur DM Sans 600 16). Puis mosaïque 600 px. Puis grille 3 colonnes Problème · Rôle (ou Mon rôle) · Résultat (étiquette mono 13 accent, paragraphe 17 / 1.55). Sections suivantes selon le projet (Périmètre en liste à filets, « Sous le capot », frise, témoignage). CTA final : filet encre, h2 48 + deux boutons (« Réserver une visio » primaire, « Projet suivant : X → » secondaire).

### Badges stores (pages Ping, YippyLingo, Diagoplus, Filou)
Sous le lead du hero, `display: flex; gap: 12px`. Hauteur **36 px**, `opacity: .85`, lien `target="_blank" rel="noopener"`. Utiliser les badges officiels Apple (« Télécharger dans l'App Store », noir, FR) et Google Play (« Disponible sur Google Play », FR), servis en local dans `/assets/badges/`. Les SVG Wikimedia des maquettes sont des emplacements.

| Projet | App Store | Google Play |
|---|---|---|
| Ping | https://apps.apple.com/fr/app/ping-brise-la-glace/id6762347950 | https://play.google.com/store/apps/details?id=fr.wirtech.ping |
| YippyLingo | https://apps.apple.com/fr/app/yippylingo/id6466095953 | https://play.google.com/store/apps/details?id=com.yippylingo.learning |
| Diagoplus | https://apps.apple.com/fr/app/diagoplus/id1536943593 | — (Android hors Play Store) |
| Filou | https://apps.apple.com/fr/app/filou-la-routine-des-petits/id6804604137 | — |

### Footer
Filet haut. Liens Services · Réalisations · Méthode · Parcours · Contact · Mentions légales (mono 13). Ligne « AKAGO SAS, Challes-les-Eaux · Fait en Savoie » (mono 12 muted).

## Accueil (`1d` / `4a`) — ordre des sections

1. **Nav**.
2. **Hero** : colonne gauche (étiquette mono « Product Engineer / CTO » + « App mobile, web & SaaS · Lyon — Savoie » en muted ; portrait 72 px au-dessus du titre ; display « Je m'occupe du produit autant que du code. » ; lead ; 2 CTA). Colonne droite : mosaïque de 5 captures (Moofize dashboard, Libélaw dashboard, Famyhelp carte, YippyLingo accueil, Ping accueil). Mobile : empilé, mosaïque 300 px après les CTA.
3. **Bandeau chiffres**.
4. **Services** `#services` : titre « Ce que je fais » + intro ; 3 cartes ; encart « Agréé CII » (fond blanc, rayon 18, mono + texte).
5. **Réalisations** `#realisations` : « Projets sélectionnés » ; 4 cartes projet (Libélaw, Ping, Moofize, FamyHelp) en 2 colonnes ; puis 5 cartes compactes (Filou, MyBul · Bulle d'Autonomie, YippyLingo, DiagoPlus, Leezay) en 3 colonnes.
6. **Méthode** `#methode` : section sur fond encre (texte crème, accent clair). Titre « Semaine après semaine, démo chaque vendredi. » ; frise 5 étapes (Sem. 1–3 Cadrage · Sem. 4–6 Prototype testé · Sem. 7–12 Sprints courts · Sem. 13 Mise en ligne · Ensuite Accompagnement).
7. **Témoignages** : « Ils en parlent » ; 2 cartes (Anne Latanière, Moofize — Avis Malt · 30/09/2024 ; Maxence Laurent, CEO Libélaw — 2 ans de collaboration) ; ligne « Guillaume Thiallet et 4 autres personnes recommandent Antoine sur Malt. »
8. **Logos clients** : Libélaw, Moofize, Ping, Famyhelp, YippyLingo, Leezay, DiagoPlus, MyBul, Erasme · Grand Lyon, Inook, YouNow, Zicomatic (hauteur 28–32 px, gris, `filter: grayscale(1)` + opacité .7, couleur au hover).
9. **Parcours** `#parcours` : « Quinze ans, un fil rouge. » + frise datée (2011 · 2012 → 2018 · 2018 → 2019 · depuis 2020 · depuis juin 2023), grille `130px 1fr`.
10. **Seul ou en équipe** : 2 cartes (« En direct avec moi » avec CTA ; « Avec le collectif Akago » avec logo Akago et lien akago.fr →).
11. **Contact** `#contact` : « Parlons de votre projet, 30 minutes suffisent. », CTA, `antoine@akago.fr`, liste Malt 5/5 · réponse < 1 h / LinkedIn 1 300+ abonnés / Disponibilité `[à préciser]`.
12. **Footer**.

Les textes exacts sont dans le HTML de `1d` : les reprendre au caractère près.

## Interactions et comportement

- **Aucune dépendance JS.** Le JS se limite à : menu mobile, cycle d'angle du portrait, cycle des captures dans les mosaïques, Plausible. Tout doit rester lisible et navigable sans JS.
- **Transitions** : `160ms ease-out` pour boutons et liens, `240ms cubic-bezier(.2,.8,.2,1)` pour portrait et captures.
- **`prefers-reduced-motion: reduce`** : aucune translation ni rotation animée ; seuls couleur et soulignement changent. Le portrait garde son angle de repos.
- **Cibles tactiles ≥ 44 px** partout.
- **Ancres** : `scroll-margin-top: 96px` sur les sections ; `scroll-behavior: smooth` sauf reduced-motion.
- **Responsive** : 1280 desktop de référence ; à partir de 1024 les grilles 3 colonnes passent à 2 ; sous 720 tout passe en 1 colonne et on rejoint la maquette 390 (`4a`, `7a`). Titres en `clamp()` entre les deux tailles indiquées.
- **Images** : `loading="lazy"` sauf hero ; `width`/`height` renseignés ; `alt` descriptifs repris des maquettes ; WebP/AVIF avec fallback.

## SEO, métadonnées, analytics

- `<title>` accueil : « Antoine Josnin — Product Engineer / CTO, apps mobiles, web & SaaS ». Pages projets : « <Projet> — Antoine Josnin ».
- `<meta name="description">` par page, 150 caractères, à rédiger depuis le lead de chaque page.
- Open Graph + Twitter card `summary_large_image`. Image accueil d'après `8a`, une par projet d'après `8b` (fond teinté du projet, icône, titre, capture). Zone sûre : texte dans les 72 px de marge, essentiel à gauche (recadrage 1:1 possible).
- **JSON-LD** : `Person` (Antoine Josnin, jobTitle « Product Engineer / CTO », worksFor `Organization` Akago SAS, sameAs LinkedIn + Malt, address Challes-les-Eaux) sur l'accueil ; `CreativeWork` ou `SoftwareApplication` par page projet ; `BreadcrumbList` sur les pages projets.
- `sitemap.xml`, `robots.txt`, `canonical` sur chaque page, `lang="fr"`.
- **Plausible** : script `https://plausible.io/js/script.js` avec `data-domain="antoinejosnin.fr"`, événements personnalisés `Visio` (clic CTA) et `Store` (clic badge).
- **Tally** : les CTA « Réserver une visio » pointent vers le formulaire Tally (URL à fournir par Antoine, sinon `https://tally.so/r/wdA0DA` d'Akago en attendant).
- Favicon : portrait rond ou monogramme « AJ » Bricolage 800 sur accent, en SVG + PNG 180.

## Performance et qualité

- Lighthouse ≥ 90 sur les 4 axes, mobile et desktop.
- Polices self-hostées, sous-ensemble latin, `preload` de Bricolage et DM Sans.
- CSS unique < 30 ko, pas de framework.
- Captures d'écran optimisées (WebP, max 1600 px de large pour les desktop, 800 pour les mobiles).
- Validation HTML, contraste vérifié (valeurs ci-dessus), navigation clavier complète.

## Assets

### Fournis dans ce dossier
- `assets/people/antoine-josnin-detoure.png` — portrait détouré (provisoire, voir TODO) ; `antoine-josnin.png` — source.
- `uploads/filouportfolio/` — icône, mascotte SVG, wordmark, frise Figma, captures App Store (iPad + iPhone).
- `uploads/mybulportfolio/figma/` — écrans Figma mobile, web coordinateur, web entreprise, web admin.
- `uploads/yippylingo_visuels/` — logo, écrans Figma.
- `uploads/diagoplus_visuels/` — écrans Figma web et mobile.
- `uploads/leezay_visuels/` — écrans Figma assuré, assureur, admin ; capture dashboard.

### À télécharger depuis akago.fr et servir en local (`/assets/…`)
Captures : `assets/showcase/desktop-libelaw-{dashboard,missions,analytics}.webp`, `desktop-moofize-{dashboard,messenger,visio}.webp`, `mobile-ping-{home,venue,settings}.webp`, `mobile-famyhelp-{map,demandes,bottomsheet}.webp`, `mobile-libelaw-mission.webp`, `mobile-yippylingo-home.webp`.
Icônes : `assets/icons/{libelaw,moofize,ping,famyhelp,yippylingo,leezay}.png`.
Logos clients : `assets/clients/{libelaw,moofize,ping,famyhelp,leezay,zicomatic,lyon}-full-logo.png`, `assets/clients/{yippylingo,diagoplus,bulle-autonomie,inook,younow}.png`, `assets/akago/logo.png`.
Diagoplus favicon (icône compacte) : `https://cdn.prod.website-files.com/63a0720a0612e35cc049e342/63ab1f5b2e85b3ce7ead2fec_Favicon.svg` — à remplacer par un logo HD (TODO).

### Badges stores
Télécharger les badges officiels FR : Apple (App Store Marketing Guidelines, badge noir) et Google Play (Play Badge generator, FR). Ne pas utiliser les SVG Wikimedia des maquettes.

## Contenu : attributions et accords

Témoignages signés : Anne Latanière (Moofize, avis Malt 30/09/2024) · Maxence Laurent (CEO Libélaw) · William Hojikian (fondateur de Ping, WIR TECH) · Claire Whiteley (fondatrice de YippyLingo) · Famyhelp (non nominatif, à conserver tel quel ou à compléter). Contact Leezay : Rémy Barbeault.

Ne publier captures et citations d'un projet qu'avec l'accord écrit du client : confirmés Libélaw, Filou (projet personnel), YippyLingo ; en attente pour les autres (voir TODO).

Leezay est un projet mené **avec** Akago (collectif sans locaux) : ne jamais écrire « chez Akago ».

## Fichiers

- `Portfolio Antoine Josnin.dc.html` — canvas de design (toutes les options ; ouvrir dans un navigateur, badges cliquables `#1d`, `#3a`…).
- `support.js` — runtime du canvas, nécessaire pour l'ouvrir, sans intérêt pour l'intégration.
- `TODO.md` — travail restant, côté code et côté contenu.
- `assets/`, `uploads/` — visuels référencés par le canvas, chemins relatifs conservés.
