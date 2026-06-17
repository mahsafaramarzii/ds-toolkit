import {createContext, useContext, useEffect, useState, } from "react";
import type { ReactNode } from "react"; 
  type Theme = "light" | "dark";
  
  interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
  }
  
  const ThemeContext =
    createContext<ThemeContextType | null>(null);
  
  interface ThemeProviderProps {
    children: ReactNode;
  }
  
  export function ThemeProvider({
    children,
  }: ThemeProviderProps) {
    const [theme, setTheme] =
    useState<Theme>(() => {
      const savedTheme =
        localStorage.getItem("theme");
  
      return savedTheme === "dark"
        ? "dark"
        : "light";
    });
  
    
  
    useEffect(() => {
      document.documentElement.classList.remove(
        "light",
        "dark"
      );
  
      document.documentElement.classList.add(
        theme
      );
  
      localStorage.setItem(
        "theme",
        theme
      );
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prev) =>
        prev === "light"
          ? "dark"
          : "light"
      );
    };
  
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
  
  export function useTheme() {
    const context =
      useContext(ThemeContext);
  
    if (!context) {
      throw new Error(
        "useTheme must be used within ThemeProvider"
      );
    }
  
    return context;
  }