import { ArrowRight, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Packages() {
  const { localizedPath, t } = useLanguage();

  return (
    <section className="border-t border-line bg-panel-soft/30 py-16 transition-colors sm:py-20" aria-labelledby="packages-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent">{t.packages.eyebrow}</p>
          <h2 id="packages-title" className="mt-3 text-3xl font-bold text-text-main sm:text-4xl">
            {t.packages.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-text-muted">{t.packages.description}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {t.packages.items.map((item) => (
            <article
              key={item.name}
              className="rounded-lg border border-line bg-panel p-6 shadow-card transition hover:-translate-y-1 hover:border-accent/50 hover:bg-panel-soft"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-accent-soft">
                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-text-main">{item.name}</h3>
              <p className="mt-2 text-sm font-medium text-accent-soft">{item.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-300" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={localizedPath('contact')}
                className="mt-7 inline-flex items-center gap-2 rounded-md border border-accent/30 px-4 py-3 text-sm font-semibold text-accent-soft transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`${t.packages.ctaAria} ${item.name}`}
              >
                {t.packages.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
