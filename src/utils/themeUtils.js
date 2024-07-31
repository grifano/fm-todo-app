export const getCurrentTheme = () => {
  return document.documentElement.getAttribute("data-theme") || "light";
};

export const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

export const detectSystemTheme = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDarkMode ? "dark" : "light";
};
