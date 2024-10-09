import React from "react";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import "./ThemeComponent.css"; // Import your CSS file

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`themed-container ${theme.type === "dark" ? "dark" : "light"}`}
    >
      <h1>Hello, Themed World!</h1>
      <button className="toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

const Theme = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default Theme;
