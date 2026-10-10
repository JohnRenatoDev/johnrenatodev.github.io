(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const preference = matchMedia('(prefers-color-scheme: dark)');
  let manual = false;
  try { manual = ['light', 'dark'].includes(localStorage.getItem('theme')); } catch {}
  const apply = (theme) => {
    root.dataset.theme = theme;
    button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
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
