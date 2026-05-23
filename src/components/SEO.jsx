import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getRouteKeyFromPath, getRoutePath, supportedLanguages } from '../data/navigation.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function SEO() {
  const location = useLocation();
  const { language, t } = useLanguage();
  const routeKey = getRouteKeyFromPath(location.pathname) || 'home';
  const pageSeo = t.seo.pages[routeKey] || t.seo.pages.home;
  const canonicalPath = getRoutePath(routeKey, language);
  const canonicalUrl = `${t.seo.baseUrl}${canonicalPath}`;
  const alternateLinks = supportedLanguages.map((alternateLanguage) => ({
    language: alternateLanguage,
    url: `${t.seo.baseUrl}${getRoutePath(routeKey, alternateLanguage)}`,
  }));
  const alternateLocale = language === 'pl' ? 'en_US' : 'pl_PL';

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{pageSeo.title}</title>
      <meta name="description" content={pageSeo.description} />
      <meta name="keywords" content={t.seo.keywords} />
      <meta name="author" content={t.seo.author} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#05070d" media="(prefers-color-scheme: dark)" />
      <meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)" />

      <link rel="canonical" href={canonicalUrl} />
      {alternateLinks.map((item) => (
        <link key={item.language} rel="alternate" hrefLang={item.language} href={item.url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${t.seo.baseUrl}${getRoutePath('home', 'pl')}`} />

      <meta property="og:title" content={pageSeo.title} />
      <meta property="og:description" content={pageSeo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={t.seo.image} />
      <meta property="og:site_name" content={t.seo.siteName} />
      <meta property="og:locale" content={t.seo.locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSeo.title} />
      <meta name="twitter:description" content={pageSeo.description} />
      <meta name="twitter:image" content={t.seo.image} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: t.seo.siteName,
          url: t.seo.baseUrl,
          image: t.seo.image,
          description: t.seo.pages.home.description,
          founder: {
            '@type': 'Person',
            name: t.seo.author,
            jobTitle: 'Cloud Engineer / Linux Administrator / Operations Engineer',
          },
          areaServed: ['PL', 'EU'],
          sameAs: ['https://www.linkedin.com/in/adam-haldas/', 'https://github.com/szulinek/'],
        })}
      </script>
    </Helmet>
  );
}
