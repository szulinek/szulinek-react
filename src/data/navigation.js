export const defaultLanguage = 'pl';

export const supportedLanguages = ['pl', 'en'];

export const languageLabels = {
  pl: 'PL',
  en: 'EN',
};

export const routeConfig = [
  {
    key: 'home',
    paths: {
      pl: '/pl',
      en: '/en',
    },
  },
  {
    key: 'services',
    paths: {
      pl: '/pl/uslugi',
      en: '/en/services',
    },
  },
  {
    key: 'technologies',
    paths: {
      pl: '/pl/technologie',
      en: '/en/technologies',
    },
  },
  {
    key: 'experience',
    paths: {
      pl: '/pl/doswiadczenie',
      en: '/en/experience',
    },
  },
  {
    key: 'contact',
    paths: {
      pl: '/pl/kontakt',
      en: '/en/contact',
    },
  },
];

export const legacyRedirects = {
  '/uslugi': '/pl/uslugi',
  '/technologie': '/pl/technologie',
  '/doswiadczenie': '/pl/doswiadczenie',
  '/kontakt': '/pl/kontakt',
};

export function isSupportedLanguage(language) {
  return supportedLanguages.includes(language);
}

export function getLanguageFromPath(pathname) {
  const language = pathname.split('/').filter(Boolean)[0];
  return isSupportedLanguage(language) ? language : null;
}

export function getRoutePath(routeKey, language) {
  const route = routeConfig.find((item) => item.key === routeKey);
  return route?.paths[language] || `/${language}`;
}

export function getRouteKeyFromPath(pathname) {
  return routeConfig.find((route) => Object.values(route.paths).includes(pathname))?.key || null;
}

export function getEquivalentPath(pathname, targetLanguage) {
  const routeKey = getRouteKeyFromPath(pathname) || 'home';
  return getRoutePath(routeKey, targetLanguage);
}
