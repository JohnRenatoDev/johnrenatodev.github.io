# João Russio — personal website

Static portfolio published at https://johnrenatodev.github.io/ with a link to https://russios-blog.pages.dev/.

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

The English PDF uses the existing June 2026 resume. The Portuguese PDF is a complete translation of that resume; the older file named `CV PT-BR.pdf` was not used because its content mixes languages. The translation and reproducible PDF generation script are in the parent CV workspace.
