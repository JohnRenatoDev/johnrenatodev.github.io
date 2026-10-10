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
