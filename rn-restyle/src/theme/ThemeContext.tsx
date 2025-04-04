import React, { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { BaseTheme } from '../types/theme';
import defaultTheme from './defaultTheme';

// Create theme context with default theme value
export const ThemeContext = createContext<{
  theme: BaseTheme;
  setTheme: (theme: BaseTheme) => void;
}>({
  theme: defaultTheme,
  setTheme: () => {},
});

// Props for ThemeProvider
interface ThemeProviderProps<T extends BaseTheme = BaseTheme> {
  theme?: T;
  children: ReactNode;
}

// Create the ThemeProvider component
export const ThemeProvider = <T extends BaseTheme = BaseTheme>({ theme, children }: ThemeProviderProps<T>) => {
  // Use state to manage the current theme, defaulting to our default theme if none provided
  const [currentTheme, setCurrentTheme] = useState<T | BaseTheme>(theme || defaultTheme);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      theme: currentTheme,
      setTheme: (newTheme: BaseTheme) => setCurrentTheme(newTheme as T | BaseTheme),
    }),
    [currentTheme],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

// Custom hook to access theme
export const useRestyleTheme = <T extends BaseTheme = BaseTheme>(): T => {
  const { theme } = useContext(ThemeContext);
  return theme as T;
};

// Custom hook for theme switching
export const useThemeSwitch = <T extends BaseTheme = BaseTheme>() => {
  const { theme, setTheme } = useContext(ThemeContext);

  return {
    currentTheme: theme as T,
    switchTheme: (newTheme: BaseTheme) => setTheme(newTheme),
  };
};
