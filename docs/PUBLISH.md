# Publier un projet en attente d'accord

Une page est construite mais gardée hors ligne tant que l'accord écrit du client
n'est pas là : **Leezay** (Rémy Barbeault, après la 1.0). MyBul et Diagoplus ont été
publiés le 4 septembre 2026 avec cette procédure. Les visuels Leezay sont convertis
dans `assets/showcase/` mais ignorés par git (`.gitignore`), donc absents du dépôt
public ; la page est `noindex, nofollow`, hors `sitemap.xml`, non liée depuis
l'accueil et sautée dans le chaînage « Projet suivant ».

Ordre du chaînage complet (README du handoff) : Libélaw → Ping → Moofize → FamyHelp →
MyBul → YippyLingo → Diagoplus → Leezay → Filou → Libélaw.

## Étapes, pour `<slug>` = leezay

1. **Visuels** : supprimer la ligne `assets/showcase/<slug>-*` et `og/<slug>.png` de
   `.gitignore`, puis `git add assets/showcase/<slug>-* og/<slug>.png`. Si les
   fichiers manquent en local, les regénérer depuis le zip du handoff
   (`design/handoff/uploads/`, cf. `docs/BOOTSTRAP.md`) et `node tools/og.mjs <slug>`.
2. **Page** : dans `projets/<slug>/index.html`, retirer la balise
   `<meta name="robots" content="noindex, nofollow">` et son commentaire.
3. **Sitemap** : ajouter l'URL dans `sitemap.xml` ; pour Leezay, retirer aussi la
   ligne `Disallow: /projets/leezay/` de `robots.txt`.
4. **Accueil** : dans `index.html`, transformer la carte compacte `<div class="card-compact">`
   du projet en `<a class="card-compact" href="/projets/<slug>/">`.
5. **Chaînage** : rétablir le lien « Projet suivant » sur la page qui précède
   (Diagoplus → Leezay) et vérifier celui de la page publiée (Leezay → Filou).
6. `git commit` puis `git push` : GitHub Pages redéploie.

## Vérification

```bash
curl -s https://antoinejosnin.fr/projets/<slug>/ | grep -c noindex   # doit rendre 0
curl -s -o /dev/null -w "%{http_code}\n" https://antoinejosnin.fr/og/<slug>.png
```
