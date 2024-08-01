import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { loadSavedTheme } from "./utils/themeManager";
import "./styles/index.css";

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    loadSavedTheme();
  }, []);

  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
