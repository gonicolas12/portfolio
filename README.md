# Portfolio — Nicolas Gouy

Portfolio personnel · Data / AI · 2026.

**Live :** [gonicolas12.github.io/portfolio](https://gonicolas12.github.io/portfolio)

---

## À propos

Site brutaliste — 4 pages (Home, About, Work, Contact) — typographie massive, palette noir / crème / orange, switch FR/EN et switch Recruteur/Dev.

- **Recruiter mode** : version épurée, orientée profil et lecture rapide.
- **Dev mode** : sections `.dev-only` qui se déplient sur `work.html` (specs chiffrées, arborescence du repo My_AI, modèles Ollama supportés, config relay mobile, extension VS Code agentique, mode vocal entrée/sortie faster-whisper + pyttsx3, assistant de configuration).

Construit en HTML / CSS / JS vanilla. Aucun build, aucune dépendance externe au-delà de Google Fonts (Archivo Black, Space Grotesk, Inter, JetBrains Mono).

## Stack

- HTML5 / CSS3 (Grid, Custom Properties, Animations, container queries-friendly)
- JavaScript vanilla (IntersectionObserver, scroll listeners, raccourcis clavier, easter-egg Konami)
- `localStorage` pour persister la langue et le mode entre les pages
- Google Fonts
- Hébergé sur GitHub Pages

## Structure

```
portfolio/
├── index.html              # Home — manifesto, chiffres clés, projet phare, méthode
├── about.html              # Profil, timeline, stack, langues, intérêts
├── work.html               # Étude de cas MY_AI, 9 agents, sections .dev-only, code snippet
├── contact.html            # Liens directs, FAQ, disponibilité
├── shared/
│   ├── core.css            # Tokens, sysbar, navbar, modes rec/dev, responsive global
│   ├── content.js          # Données structurées + i18n + state (lang, mode)
│   └── header.js           # Sysbar + navbar + scroll progress + raccourcis + Konami
├── styles/
│   ├── index.css           # Styles spécifiques home
│   ├── about.css           # Styles spécifiques about
│   ├── work.css            # Styles work + sections .dev-only (specs, modules, models)
│   └── contact.css         # Styles spécifiques contact
├── scripts/
│   ├── index.js            # mountHeader/mountFooter pour la home
│   ├── about.js            # idem about
│   ├── work.js             # idem work
│   └── contact.js          # idem contact
├── assets/
│   ├── favicon.svg
│   ├── og-image-v2.png        # Carte OpenGraph 1200×630
│   └── portrait.jpg
├── LICENSE                 # MIT — code uniquement
└── README.md
```

## Fonctionnalités

- **Bilingue FR/EN** via attributs `data-fr` / `data-en` (avec variante `data-fr-html` / `data-en-html` quand le contenu inclut du HTML inline).
- **Modes Recruiter / Dev** via classes `.rec-only` / `.dev-only` et toggle `body.mode-rec` / `body.mode-dev`. Le mode est persistant et synchronisé entre toutes les pages.
- **Raccourcis clavier** : `G` puis `H/A/W/C` pour naviguer, `L` pour la langue, `M` pour le mode, `?` pour l'overlay des shortcuts, `Shift+G` pour GitHub, `E` pour email. Plus un easter-egg Konami.
- **Animations au scroll** via `IntersectionObserver` (`.reveal`, `.slide-x`).
- **SEO / OG** : meta description, Open Graph et Twitter Card sur chaque page.
- **Responsive** : breakpoints à 900 px et 720 px ; navbar mobile compactée pour afficher les 4 sections sans scroll.

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
3. Le site apparaît sur `https://gonicolas12.github.io/portfolio`

## Crédits

- Design & code : Nicolas Gouy — [GitHub](https://github.com/gonicolas12) · [LinkedIn](https://www.linkedin.com/in/nicolas-gouy/)
- Polices : Archivo Black, Space Grotesk, Inter, JetBrains Mono (Google Fonts)
- Étude de cas mise en avant : [My_AI](https://github.com/gonicolas12/My_AI) — assistant IA 100 % local en Python.

## Licence

Le **code** est publié sous licence MIT — voir [`LICENSE`](LICENSE).

Le **contenu** (textes, photo, descriptions de projets, identité visuelle) reste © Nicolas Gouy. Pas de réutilisation sans autorisation écrite.
