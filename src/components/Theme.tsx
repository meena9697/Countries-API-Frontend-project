import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type ThemeType = "light" | "dark";
type Theme = {
  background: string;
  text: string;
};

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setThemeType: null | Dispatch<SetStateAction<ThemeType>>;
}
export const themes = {
  light: {
    background: "white",
    text: "black",
  },
  dark: {
    background: "black",
    text: "gray",
  },
};

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: "light",
  theme: themes["light"],
  setThemeType: null,
});
type ThemeProps = {
  children: React.ReactNode;
};

export default function Theme({ children }: ThemeProps) {
  const [themeType, setThemeType] = useState<ThemeType>("light");
  return (
    <ThemeContext.Provider
      value={{ theme: themes[themeType], themeType, setThemeType }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
