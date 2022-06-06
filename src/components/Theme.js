import React, { createContext, useState } from "react";

export const themes = {
  light: {
    background: "gray",
    text: "black",
  },
  dark: {
    background: "black",
    text: "gray",
  },
};

export const ThemeContext = createContext(themes.light);

export default function Theme({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}