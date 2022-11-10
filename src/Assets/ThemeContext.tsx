import React, { useState, createContext, ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContext = { theme: Theme; toggleTheme: () => void };

//the context 
export const ThemeContext = createContext<ThemeContext>(
  {} as ThemeContext
);


interface ThemeProviderProps{
  children: ReactNode
}

//the provider
export const ThemeProvider: React.FC<ThemeProviderProps> = (props: ThemeProviderProps  ) => {

  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
