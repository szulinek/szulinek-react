import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function NotFound() {
  const { localizedPath, t } = useLanguage();

  return (
    <section className="min-h-[70vh] pt-12 sm:pt-16" aria-labelledby="not-found-title">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-accent">{t.pages.notFound.eyebrow}</p>
        <h1 id="not-found-title" className="mt-3 text-4xl font-bold text-text-main">
          {t.pages.notFound.title}
        </h1>
        <p className="mt-4 max-w-xl text-text-muted">{t.pages.notFound.description}</p>
        <Link
          to={localizedPath('home')}
          className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={t.pages.notFound.ctaAria}
        >
          {t.pages.notFound.cta}
        </Link>
      </div>
    </section>
  );
}
