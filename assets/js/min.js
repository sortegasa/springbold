document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const langSelect = document.getElementById('lang-select');
  const sunIcon = document.getElementById('light-icon');
  const moonIcon = document.getElementById('dark-icon');

  // Detectar idioma del navegador y ponerlo en el select (sólo si existe en el select)
  const supportedLangs = ['en', 'es', 'it', 'pt'];
  let browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2);
  if (!supportedLangs.includes(browserLang)) browserLang = 'en';
  if (langSelect) langSelect.value = browserLang;

  function ensureIconsVisibility() {
    if (!sunIcon || !moonIcon) return;
    const isDark = htmlEl.classList.contains('dark');
    sunIcon.style.display = isDark ? 'none' : 'block';
    moonIcon.style.display = isDark ? 'block' : 'none';
  }

  function updateIcons() {
    ensureIconsVisibility();
  }

  // Siempre aplicar tema por horario (no se guarda preferencia)
  const hour = new Date().getHours();
  const defaultTheme = hour >= 7 && hour < 19 ? 'light' : 'dark';
  htmlEl.classList[defaultTheme === 'dark' ? 'add' : 'remove']('dark');
  updateIcons();

  themeToggle?.addEventListener('click', () => {
    const isDark = htmlEl.classList.toggle('dark');
    updateIcons();
  });

  langSelect?.addEventListener('change', () => {
    location.reload();
  });
});