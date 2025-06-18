document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
    localStorage.setItem("theme", theme);
  };

  setTheme(storedTheme || (systemPrefersDark ? "dark" : "light"));

  themeToggle?.addEventListener("click", () => {
    const isDark = htmlEl.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
});