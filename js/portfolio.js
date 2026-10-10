(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const portuguese = root.lang === 'pt-BR';
  if (!root.dataset.languageRedirect) {
    try { localStorage.setItem('language', portuguese ? 'pt' : 'en'); } catch {}
  }
  const preference = matchMedia('(prefers-color-scheme: dark)');
  let manual = false;
  try { manual = ['light', 'dark'].includes(localStorage.getItem('theme')); } catch {}
  const apply = (theme) => {
    root.dataset.theme = theme;
    const label = portuguese
      ? `Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`
      : `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    button.setAttribute('aria-label', label);
    button.setAttribute('title', button.getAttribute('aria-label'));
  };
  apply(root.dataset.theme);
  button.hidden = false;
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    manual = true;
    apply(theme);
    try { localStorage.setItem('theme', theme); } catch {}
  });
  preference.addEventListener('change', (event) => {
    if (!manual) apply(event.matches ? 'dark' : 'light');
  });
})();
