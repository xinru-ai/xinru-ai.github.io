const themeKey = 'xinru-site-theme';
const root = document.documentElement;
const themeButtons = document.querySelectorAll('.theme-button');

const applyTheme = (theme) => {
  if (theme === 'light' || theme === 'dark') {
    root.setAttribute('data-theme', theme);
  } else {
    root.removeAttribute('data-theme');
  }

  const effectiveTheme =
    root.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  themeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.themeValue === effectiveTheme);
  });
};

applyTheme(window.localStorage.getItem(themeKey));

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.dataset.themeValue;
    window.localStorage.setItem(themeKey, theme);
    applyTheme(theme);
  });
});

document.querySelectorAll('.lang-button').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('is-active')) return;
    window.alert('English pages are planned next. The current website is being rewritten in Chinese first.');
  });
});

document.querySelectorAll('.faq-item').forEach((item) => {
  const trigger = item.querySelector('.faq-question');
  if (!trigger) return;
  trigger.addEventListener('click', () => {
    item.classList.toggle('is-open');
  });
});
