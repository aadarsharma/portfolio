"use client"
import React, { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | JSX.Element[];
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkTheme");
    const isDark = savedTheme ? JSON.parse(savedTheme) : true;
    setIsDarkTheme(isDark);
    updateBodyClass(isDark);
  }, []);

  const toggleThemeHandler = () => {
    const newThemeState = !isDarkTheme;
    setIsDarkTheme(newThemeState);
    localStorage.setItem("isDarkTheme", JSON.stringify(newThemeState));
    updateBodyClass(newThemeState);
  };

  const updateBodyClass = (isDark: boolean) => {
    const bodyClass = document.body.classList;
    isDark ? bodyClass.add("dark") : bodyClass.remove("dark");
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
