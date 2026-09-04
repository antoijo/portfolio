# Questions et écarts au handoff

Liste tenue pendant l'intégration (4 septembre 2026). À traiter ensemble ; chaque
point dit ce qui a été fait en attendant. Les écarts entre le README du handoff et
le canvas ont été tranchés **en faveur du canvas** (écran retenu = référence
visuelle), sauf mention contraire.

## Accords clients et publication

1. **MyBul, Diagoplus, Leezay** : pages construites, mais leurs visuels Figma ne
   sont pas dans le dépôt (public) tant que l'accord écrit n'est pas là. En
   production ces trois pages sont `noindex`, hors sitemap, non liées depuis
   l'accueil (cartes compactes sans lien) et sautées dans le chaînage « Projet
   suivant ». Pour publier l'une d'elles : `docs/PUBLISH.md`. Ping, Moofize et
   FamyHelp reprennent des captures et citations déjà publiques sur akago.fr.
2. **Malt / LinkedIn** : URLs retrouvées par recherche
   (`malt.fr/profile/antoinejosnin`, `linkedin.com/in/antoinejosnin`). À confirmer.
3. **Réservation** : tous les CTA pointent sur le Tally d'Akago
   (`tally.so/r/wdA0DA`). Quand Calendly (ou autre) est prêt, une seule URL à
   remplacer dans les pages (`grep -l tally.so`).
4. **Plausible** : script chargé sans SRI (le script évolue côté Plausible, un hash
   figé casserait la mesure). Le compte `antoinejosnin.fr` reste à créer.

## Accessibilité

17. **Accent `#2F7FCB`** : le README annonce 4,6:1 sur blanc, le ratio réel est
    **4,18:1** (Lighthouse le signale sur tous les CTA et liens), sous le seuil AA
    (4,5:1) pour du texte courant. J'ai retenu **`#256BB0`** (le hover prévu, 5,5:1)
    comme accent, avec `#1F5F9E` en hover et `#1A5289` en hover de lien. Une seule
    ligne à changer dans `:root` si tu préfères revenir au bleu d'origine. Même
    raison : textes de la carte « En direct avec moi » en blanc opaque, note
    « Architecture du produit… » (Diagoplus) en gris atténué standard.

## Écarts README ↔ canvas (tranchés côté canvas)

5. Nom dans la nav : 20 px (canvas) au lieu de 18 px (README).
6. `h2` de section : Bricolage **700** (canvas) au lieu de 800 (README). Le 800
   est gardé pour le titre du bloc contact et le CTA final des pages projets.
7. Espacement entre sections : **104 px** desktop (canvas, planche 4b) au lieu de
   96 ; pages projets à 96 (canvas 3a).
8. Cartes projet de l'accueil, desktop : captures **droites** dans une zone de
   300 px (1d) alors que le README décrit 378 px avec captures tournées ±4°. Le
   mobile suit 4a (captures tournées). Le hover 7c (translateY −3 px, bordure
   encre, capture qui se redresse) est appliqué dans les deux cas.
9. Cartes compactes : **5 colonnes** (1d) au lieu de 3 (README).
10. Fonds de mosaïque : le canvas utilise Moofize `#E4EEE9`, MyBul `#E3EDF0`,
    Leezay `#E4EEEB` ; le tableau du README décale ces valeurs. Canvas suivi.
11. Menu mobile (7b) : numéros en gris atténué et titres 34 px, là où le README dit
    accent et 32 px.
12. Logos clients : tuiles blanches 88 px (canvas) plutôt que logos nus 28–32 px
    (README) ; le `grayscale` + couleur au hover du README est appliqué aux tuiles.
13. Indicateur « n / N → » des mosaïques : pastille crème à côté de la légende
    (README), là où 7c montre une pastille sombre en bas à droite.
14. Portrait dans la nav de l'accueil : absent de 1d, présent sur 3a et dans le
    README. README suivi (portrait partout, c'est le lien accueil).

## Textes

15. La maquette mobile 4a raccourcit beaucoup de textes (services, projets,
    parcours, « réponse < 1 h »). Un seul DOM : la copie de 1d est servie partout.
    Seule exception, les descriptions de la frise Méthode sont masquées en mobile
    comme sur 4a.
16. Placeholders conservés tels quels : `[à préciser]` (disponibilité),
    `[… : à compléter]` (résultats Ping, Moofize, FamyHelp).
