# Portfolio — Nicolas Gouy

Portfolio personnel · Data / AI · 2026.

**Live :** [gonicolas12.github.io/portfolio](https://gonicolas12.github.io/portfolio)

---

## À propos

Site brutaliste — 4 pages (Home, About, Work, Contact) — typographie massive, palette noir / crème / orange, mode FR/EN et mode Recruteur/Dev.

Construit en HTML / CSS / JS vanilla. Aucun build, aucune dépendance externe au-delà de Google Fonts (Archivo Black, Newsreader, JetBrains Mono).

## Stack

- HTML5 / CSS3 (Grid, Custom Properties, Animations)
- JavaScript vanilla (IntersectionObserver, postMessage, scroll listeners)
- Google Fonts
- Hébergé sur GitHub Pages

## Structure

```
portfolio/
├── index.html         # Home — manifesto, chiffres clés, projet phare, méthode
├── about.html         # Profil, timeline, stack, langues, intérêts
├── work.html          # Étude de cas MY_AI, 9 agents, code snippet
├── contact.html       # Liens directs, FAQ, disponibilité
├── shared/
│   ├── core.css       # Tokens et styles partagés
│   ├── content.js     # Données structurées + i18n + state
│   └── header.js      # Header sticky avec switch lang/mode
└── assets/
    ├── favicon.svg
    ├── og-image.png   # Carte OpenGraph 1200×630
    └── portrait.jpg
```

## Lancer en local

Ouvrir `index.html` dans un navigateur — c'est tout.

Ou avec un petit serveur statique :

```bash
cd portfolio
python3 -m http.server 8000
# → http://localhost:8000
```

## Déploiement GitHub Pages

1. Push ce dossier à la racine d'un repo `portfolio`
2. Repo → **Settings → Pages → Source : `main` / `/ (root)`**
3. Le site apparaît sur `https://<username>.github.io/portfolio/`

## Crédits

- Design & code : Nicolas Gouy
- Polices : Archivo Black, Newsreader, JetBrains Mono (Google Fonts)

## Licence

Code en MIT. Contenu (textes, photo, projets décrits) © Nicolas Gouy — pas de réutilisation sans autorisation.
