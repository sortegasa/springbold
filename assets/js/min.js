document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const langSelect = document.getElementById('lang-select');
  const sunIcon = document.getElementById('light-icon');
  const moonIcon = document.getElementById('dark-icon');

  function ensureIconsVisibility() {
    if (!sunIcon || !moonIcon) return;
    const isDark = htmlEl.classList.contains('dark');
    sunIcon.style.display = isDark ? 'none' : 'block';
    moonIcon.style.display = isDark ? 'block' : 'none';
  }

  function updateIcons() {
    const isDark = htmlEl.classList.contains('dark');
    ensureIconsVisibility();
  }

  // Aplicar tema por defecto o desde localStorage
  const storedTheme = localStorage.getItem('theme');
  if (!storedTheme) {
    const hour = new Date().getHours();
    const defaultTheme = hour >= 7 && hour < 19 ? 'light' : 'dark';
    htmlEl.classList.toggle('dark', defaultTheme === 'dark');
    localStorage.setItem('theme', defaultTheme);
  } else {
    htmlEl.classList.toggle('dark', storedTheme === 'dark');
  }

  updateIcons();

  themeToggle?.addEventListener('click', () => {
    const isDark = htmlEl.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcons();
  });

  langSelect?.addEventListener('change', () => {
    const selected = langSelect.value;
    localStorage.setItem('lang', selected);
    location.reload();
  });

  const storedLang = localStorage.getItem('lang');
  if (storedLang) langSelect.value = storedLang;
});
