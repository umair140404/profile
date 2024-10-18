import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const lightThemeName = "light";
  const darkThemeName = "dark";

  useEffect(() => {
    const theme = localStorage.getItem("theme") || lightThemeName;
    setIsDarkTheme(theme === darkThemeName);
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? lightThemeName : darkThemeName;
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
