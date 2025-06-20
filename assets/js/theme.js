document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeExpiryKey = "theme-timestamp";
  const storedTimestamp = localStorage.getItem(themeExpiryKey);
  const now = Date.now();

  // Si hay tema almacenado pero han pasado más de 24h, se elimina
  if (storedTimestamp && now - parseInt(storedTimestamp, 10) > 24 * 60 * 60 * 1000) {
    localStorage.removeItem("theme");
    localStorage.removeItem(themeExpiryKey);
  }

  const setTheme = (theme) => {
    if (theme === "dark") {
      htmlEl.classList.add("dark");
      if (lightIcon) lightIcon.classList.add("hidden");
      if (darkIcon) darkIcon.classList.remove("hidden");
      themeToggle?.setAttribute("aria-pressed", "true");
    } else {
      htmlEl.classList.remove("dark");
      if (lightIcon) lightIcon.classList.remove("hidden");
      if (darkIcon) darkIcon.classList.add("hidden");
      themeToggle?.setAttribute("aria-pressed", "false");
    }
  };

  const hour = new Date().getHours();
  const defaultTheme = hour >= 7 && hour < 19 ? "light" : "dark";
  setTheme(storedTheme || defaultTheme);

  themeToggle?.addEventListener("click", () => {
    const isDark = htmlEl.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    localStorage.setItem(themeExpiryKey, Date.now().toString());
  });
});