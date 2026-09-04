# Publier un projet en attente d'accord

Trois pages sont construites mais gardées hors ligne tant que l'accord écrit du
client n'est pas là : **MyBul** (Bulle d'Autonomie), **Diagoplus**, **Leezay**
(Rémy Barbeault, après la 1.0). Leurs visuels sont convertis dans `assets/showcase/`
mais ignorés par git (`.gitignore`), donc absents du dépôt public ; les pages sont
`noindex, nofollow`, hors `sitemap.xml`, non liées depuis l'accueil et sautées dans
le chaînage « Projet suivant ».

Ordre du chaînage complet (README du handoff) : Libélaw → Ping → Moofize → FamyHelp →
MyBul → YippyLingo → Diagoplus → Leezay → Filou → Libélaw.

## Étapes, pour `<slug>` ∈ { mybul, diagoplus, leezay }

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
   (FamyHelp → MyBul, YippyLingo → Diagoplus, Diagoplus → Leezay) et vérifier celui
   de la page publiée.
6. `git commit` puis `git push` : GitHub Pages redéploie.

## Vérification

```bash
curl -s https://antoinejosnin.fr/projets/<slug>/ | grep -c noindex   # doit rendre 0
curl -s -o /dev/null -w "%{http_code}\n" https://antoinejosnin.fr/og/<slug>.png
```
