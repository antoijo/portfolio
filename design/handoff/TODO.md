# TODO — Portfolio antoinejosnin.fr

Mise à jour : 4 septembre 2026. Deux listes : ce que Claude Code fait, ce qu'Antoine doit fournir. Les items marqués ⏳ sont bloqués par un contenu manquant ; tout le reste peut démarrer.

## A. Claude Code — intégration

### Socle
- [ ] Initialiser `antoijo/portfolio` (branche `main`, GitHub Pages depuis `/` ou `/docs`), `CNAME` `antoinejosnin.fr`, `.nojekyll`.
- [ ] `index.html` + `/projets/<slug>/index.html` × 9 (libelaw, ping, moofize, famyhelp, mybul, yippylingo, diagoplus, leezay, filou). Leezay construit mais **non lié ni indexé** (`noindex`, absent du sitemap) jusqu'à accord.
- [ ] `styles.css` unique : tokens `:root` (README § Design tokens), reset, typographie, composants, responsive (1280 → 390), `prefers-reduced-motion`.
- [ ] Polices self-hostées woff2 (Bricolage Grotesque variable, DM Sans variable, JetBrains Mono 400/500), sous-ensemble latin, `@font-face` + `preload`.
- [ ] `site.js` (< 3 ko) : menu mobile (focus trap, `Esc`, `inert`), cycle d'angle du portrait `[-12, 10, -4, 16, -18, 6]`, cycle des captures dans les mosaïques avec indicateur « n / N → ».
- [ ] Mentions légales `/mentions-legales/` (AKAGO SAS, Challes-les-Eaux ; hébergeur GitHub ; Plausible sans cookies).

### Écrans
- [ ] Accueil desktop (`1d`) et mobile (`4a`), 12 blocs dans l'ordre du README.
- [ ] Gabarit page projet desktop (`3a`) et mobile (`7a`), puis les 9 pages avec leurs textes, fiches et mosaïques.
- [ ] Menu mobile (`7b`).
- [ ] États interactifs (`7c`) : CTA primaire / secondaire, liens, portrait, captures, carte projet, focus-visible partout.
- [ ] Chaînage « Projet suivant → » (ordre dans le README).
- [ ] Badges stores 36 px, liens du README, `target="_blank" rel="noopener"`, badges officiels servis en local.

### Assets
- [ ] Télécharger depuis akago.fr les captures, icônes et logos listés dans le README, les servir depuis `/assets/`, WebP optimisés, `width`/`height` renseignés.
- [ ] Générer les images Open Graph 1200×630 : accueil (`8a`) + une par projet (`8b`, fond teinté du projet), `/og/<slug>.png`.
- [ ] Favicon SVG + PNG 180 + `site.webmanifest`.
- [ ] ⏳ Remplacer `assets/people/antoine-josnin-detoure.png` par le portrait HD fond transparent.
- [ ] ⏳ Logos HD MyBul, Diagoplus, Leezay (icônes actuelles acceptables en attendant).

### SEO / mesure
- [ ] `<title>`, `meta description`, `canonical`, `lang="fr"`, OG + Twitter par page.
- [ ] JSON-LD : `Person` + `Organization` (accueil), `CreativeWork` ou `SoftwareApplication` + `BreadcrumbList` (projets).
- [ ] `sitemap.xml`, `robots.txt`.
- [ ] Plausible `data-domain="antoinejosnin.fr"`, événements `Visio` et `Store`.
- [ ] ⏳ CTA « Réserver une visio » → URL Tally d'Antoine (fallback `https://tally.so/r/wdA0DA`).

### Qualité
- [ ] Lighthouse ≥ 90 × 4 axes, mobile et desktop ; CSS < 30 ko ; pas de CLS sur les polices et images.
- [ ] Navigation clavier complète, `aria-current` nav, `aria-expanded` burger, `alt` repris des maquettes.
- [ ] Validation HTML (Nu), contrastes vérifiés (accent sur blanc 4,6:1, muted sur crème 7:1).
- [ ] Test des liens stores et externes.

### Contenu à insérer dès réception (⏳ bloqués par la liste B)
- [ ] Bloc contact : ligne « Disponibilité ».
- [ ] Résultats chiffrés dans la colonne « Résultat » de Ping, Moofize, FamyHelp (placeholders `[… : à compléter]` dans les maquettes). Si aucun chiffre n'arrive, supprimer le placeholder et garder la phrase seule.
- [ ] Chiffres éventuels YippyLingo, MyBul, Diagoplus, Leezay (aucun placeholder prévu : ajouter une phrase dans « Résultat » seulement si fourni).
- [ ] Signature du témoignage Famyhelp si un nom est fourni.
- [ ] Publier Leezay (retirer `noindex`, ajouter au sitemap, relier depuis l'accueil et le chaînage) après accord de Rémy Barbeault et sortie de la 1.0.

## B. Antoine — contenu et accords

### Contenu
- [ ] **Disponibilité** à afficher dans le bloc contact (ex. « Dès octobre 2026 » ou « 2 jours / semaine dès maintenant »).
- [ ] **Chiffres par projet** : Ping (utilisateurs, lieux partenaires), Moofize (utilisateurs, rendez-vous / mois), FamyHelp (téléchargements, aidants actifs). Optionnels : YippyLingo, MyBul, Diagoplus, Leezay. Libélaw est complet (4 500 avocats, 950+ missions, ~56 / mois).
- [ ] **URL Tally** du formulaire de réservation personnel (ou confirmer l'usage de celui d'Akago).
- [ ] Nom et rôle pour le témoignage **Famyhelp** (facultatif).
- [ ] Relecture finale des textes une fois les chiffres en place.

### Accords clients (captures + citations)
Confirmés : Libélaw, Filou, YippyLingo (Claire Whiteley).
- [ ] Ping — William Hojikian (WIR TECH)
- [ ] Moofize — Anne Latanière
- [ ] FamyHelp
- [ ] MyBul · Bulle d'Autonomie
- [ ] Diagoplus
- [ ] Leezay — Rémy Barbeault (+ attendre la sortie 1.0)

### Assets
- [ ] Portrait haute définition, fond transparent (le détourage actuel est provisoire).
- [ ] Logos HD : MyBul, Diagoplus, Leezay.

### Attestations (pour étayer les mentions)
- [ ] Libélaw : distinctions CNB, Lyon Startup 2024, BPI / France 2030 — confirmées, garder les justificatifs à portée.
