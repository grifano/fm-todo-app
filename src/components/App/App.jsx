import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TasksSection from "../TasksSection/TasksSection";
import { getCurrentTheme, setTheme } from "../../utils/themeManager";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {
  const [theme, setThemeState] = useState(getCurrentTheme());

  useEffect(() => {
    setTheme(theme); // Apply the theme on mount and state change
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeState(newTheme);
  };
  return (
    <>
      <Header onThemeSwitch={handleThemeSwitch} />
      <main>
        <TasksSection />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
