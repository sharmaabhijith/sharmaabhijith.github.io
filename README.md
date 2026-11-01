# sharmaabhijith.github.io

Personal site of Abhijith Sharma: a bento-style, single-page-first portfolio for research on auditing, testing and verification of AI agents. Plain HTML, CSS and JavaScript. No build step.

Live at <https://sharmaabhijith.github.io/>.

## Layout

```
index.html              home: bento grid (intro, research threads, now, clock, selected work, toolbox, contact, changelog, journey, code, off the clock)
research.html           research statement, threads, experience, education, awards, teaching
publications.html       full list rendered from assets/js/data.js, with filters and BibTeX
404.html
assets/css/style.css    design tokens (light/dark, three "pen" accents) + components
assets/js/data.js       ← publications and changelog live here
assets/js/main.js       theme, typewriter, clock, entrance animation, rendering
assets/img/             avatar crops, portrait, OG image, favicons
assets/pdf/cv.pdf       CV linked from the nav
.github/workflows/      GitHub Pages deployment
```

## Editing

- **New paper**: add an object to `pubs` in `assets/js/data.js` (newest first). Set `selected: true` to also show it on the home page. Supported link keys: `arxiv`, `venue`, `doi`, `pdf`, `code`, `page`, `data`, `thesis`.
- **News**: add to `news` in the same file (`date` is `YYYY-MM`, `html` may contain links). The home page shows the first 7.
- **Intro text, research threads, now, journey**: edit `index.html` directly.
- **Research page prose, experience, awards**: edit `research.html`.
- **Typewriter phrases**: the `data-typewriter` attribute on the headline in `index.html`.
- **Colours and fonts**: tokens at the top of `assets/css/style.css`.
- **CV**: replace `assets/pdf/cv.pdf`.
- Bump `last audited` in the footers and `sitemap.xml` when you make a meaningful update.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

The workflow in `.github/workflows/deploy.yml` publishes the repository root to GitHub Pages on every push to `main` or `master`. In the repository settings, under *Pages → Build and deployment*, the source must be **GitHub Actions**. (Alternatively, set the source to "Deploy from a branch" with the root folder; `.nojekyll` keeps GitHub from running Jekyll.)

## Credits

Layout inspired by [astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio) by Gianmarco Cavallo (MIT). Fonts: Bricolage Grotesque, Inter, JetBrains Mono and Caveat via Google Fonts.
