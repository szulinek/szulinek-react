import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  defaultLanguage,
  getEquivalentPath,
  getLanguageFromPath,
  getRoutePath,
  isSupportedLanguage,
  routeConfig,
} from '../data/navigation.js';
import { translations } from '../i18n/translations.js';

const languageStorageKey = 'szulinek-language';
const LanguageContext = createContext(null);

function readStoredLanguage() {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);
  return isSupportedLanguage(storedLanguage) ? storedLanguage : defaultLanguage;
}

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathLanguage = getLanguageFromPath(location.pathname);
  const [language, setLanguageState] = useState(pathLanguage || readStoredLanguage);

  useEffect(() => {
    if (!pathLanguage || pathLanguage === language) {
      return;
    }

    setLanguageState(pathLanguage);
  }, [language, pathLanguage]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(languageStorageKey, language);
    }

    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const t = translations[language] || translations[defaultLanguage];
    const navLinks = routeConfig.map((route) => ({
      key: route.key,
      label: t.nav[route.key],
      path: route.paths[language],
    }));

    const localizedPath = (routeKey, nextLanguage = language) => getRoutePath(routeKey, nextLanguage);

    const changeLanguage = (nextLanguage) => {
      if (!isSupportedLanguage(nextLanguage) || nextLanguage === language) {
        return;
      }

      const nextPath = getEquivalentPath(location.pathname, nextLanguage);
      setLanguageState(nextLanguage);
      window.localStorage.setItem(languageStorageKey, nextLanguage);
      navigate(`${nextPath}${location.search}${location.hash}`);
    };

    return {
      language,
      t,
      navLinks,
      localizedPath,
      changeLanguage,
    };
  }, [language, location.hash, location.pathname, location.search, navigate]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
