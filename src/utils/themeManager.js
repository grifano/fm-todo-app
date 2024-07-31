// Function to dynamically load the theme CSS file
export const loadThemeCSS = (theme) => {
  const cssFile =
    theme === "dark" ? "../styles/dark-theme.css" : "../styles/light-theme.css";

  // Remove existing theme link if any
  const existingLink = document.querySelector("link[data-theme]");
  if (existingLink) {
    existingLink.remove();
  }

  // Create and append the new link element
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = cssFile;
  link.dataset.theme = theme;
  document.head.appendChild(link);
};

// Function to initialize the theme based on system preference or localStorage
export const initializeTheme = () => {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme || systemTheme;
  loadThemeCSS(theme);
  return theme;
};

// Function to handle theme changes and listen for system theme changes
export const setupThemeChangeListener = (setTheme) => {
  const handleSystemThemeChange = (e) => {
    const newTheme = e.matches ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
};

// Initialize theme when script is loaded
initializeTheme();
