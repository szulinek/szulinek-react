import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { themeConfig } from '../data/themeConfig.js';

const ThemeContext = createContext(null);

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return themeConfig.defaultTheme;
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function readInitialTheme() {
  if (typeof window === 'undefined') {
    return themeConfig.defaultTheme;
  }

  const storedTheme = window.localStorage.getItem(themeConfig.storageKey);
  return themeConfig.themes.includes(storedTheme) ? storedTheme : getSystemTheme();
}

function hasStoredTheme() {
  if (typeof window === 'undefined') {
    return false;
  }

  return themeConfig.themes.includes(window.localStorage.getItem(themeConfig.storageKey));
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readInitialTheme);
  const [usesStoredTheme, setUsesStoredTheme] = useState(hasStoredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    if (usesStoredTheme) {
      window.localStorage.setItem(themeConfig.storageKey, theme);
    }
  }, [theme, usesStoredTheme]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return undefined;
    }

    const query = window.matchMedia('(prefers-color-scheme: light)');
    const syncSystemTheme = () => {
      if (!usesStoredTheme) {
        setThemeState(query.matches ? 'light' : 'dark');
      }
    };

    if (query.addEventListener) {
      query.addEventListener('change', syncSystemTheme);
      return () => query.removeEventListener('change', syncSystemTheme);
    }

    query.addListener(syncSystemTheme);
    return () => query.removeListener(syncSystemTheme);
  }, [usesStoredTheme]);

  const value = useMemo(() => {
    const setTheme = (nextTheme) => {
      if (themeConfig.themes.includes(nextTheme)) {
        setUsesStoredTheme(true);
        setThemeState(nextTheme);
      }
    };

    return {
      theme,
      setTheme,
      toggleTheme: () => {
        setUsesStoredTheme(true);
        setThemeState((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
      },
      isDark: theme === 'dark',
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
