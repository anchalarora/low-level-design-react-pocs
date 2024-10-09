import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const darkTheme = {
  backgroundColor: "#000000",
  color: "#ffffff",
  borderColor: "#333333",
  type: "dark",
};

const lightTheme = {
  backgroundColor: "#ffffff",
  color: "#000000",
  borderColor: "#cccccc",
  type: "light",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? darkTheme
      : lightTheme;
    setTheme(preferredTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
