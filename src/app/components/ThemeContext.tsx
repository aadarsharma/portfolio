"use client";
import React, {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: React.ReactNode;
}

const applyTheme = (isDark: boolean) => {
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
};

export function ThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setIsDarkTheme(isDark);
    applyTheme(isDark);
  }, []);

  const toggleThemeHandler = useCallback(() => {
    setIsDarkTheme((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      applyTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
