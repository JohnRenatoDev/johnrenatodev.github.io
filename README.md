# João Russio — personal website

Static portfolio published at https://johnrenatodev.github.io/ with a link to https://blog.russio.com.br/.

## Preview

Run `python3 -m http.server 8000` from the repository and open http://localhost:8000/.
No package installation or build step is required. GitHub Pages publishes the root of `master`.

## Editing

- Content and metadata: `index.html`
- Layout, responsive styles, and theme tokens: `css/portfolio.css`
- Theme switching: `js/portfolio.js`

The theme follows the system preference until a visitor chooses light or dark mode. Manual choices persist in local storage; the site also works when storage or JavaScript is unavailable.

The original template assets remain available, but the new page does not load jQuery, Kube, Typed.js, or remote fonts.

## Languages

English content lives in `index.html`; Brazilian Portuguese content lives in `pt/index.html`. Update both when changing copy. Both pages share CSS and JavaScript and work without JavaScript.

The PT/EN links select a complete page, including translated metadata and accessibility labels. The English entry page follows a saved language preference, or the browser language on a first visit. `/?lang=en` explicitly opens English, and `/pt/` explicitly opens Portuguese. Language and theme choices are stored independently. Each page declares its language, canonical URL, and alternate language URLs.

## Resume downloads

The English page downloads `/downloads/joao-russio-cv-en.pdf`; the Portuguese page downloads `/downloads/joao-russio-cv-pt-br.pdf`. These are same-origin PDF links with the HTML `download` attribute and work without JavaScript. Replace these files when updating the resumes.

Both PDFs are generated from the reviewed English and Portuguese Markdown sources in the parent CV workspace. Run `scripts/build_resume_pdf.py EN` and `scripts/build_resume_pdf.py PT-BR` there to regenerate them. The copy was revised for natural, direct wording while preserving the original experience, dates, qualifications, and results.

## Brand

The header uses the existing Russio logo in black and white SVG variants, selected by the page theme. The favicon uses the same brand symbol. Logo files are in `img/`.
