import {
  Activity,
  Box,
  CloudCog,
  DatabaseBackup,
  Globe2,
  LockKeyhole,
  Route,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Siren,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const icons = {
  activity: Activity,
  box: Box,
  cloud: CloudCog,
  databaseBackup: DatabaseBackup,
  globe: Globe2,
  lockKeyhole: LockKeyhole,
  route: Route,
  searchCheck: SearchCheck,
  server: ServerCog,
  shield: ShieldCheck,
  siren: Siren,
  workflow: Workflow,
};

export default function Services({ compact = false, showIntro = true }) {
  const { localizedPath, t } = useLanguage();
  const visibleServices = compact ? t.services.items.slice(0, 6) : t.services.items;

  return (
    <section
      className="border-t border-line py-16 transition-colors sm:py-20"
      aria-label={showIntro ? undefined : t.services.sectionAria}
      aria-labelledby={showIntro ? 'services-title' : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showIntro && (
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent">{t.services.eyebrow}</p>
            <h2 id="services-title" className="mt-3 text-3xl font-bold text-text-main sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-text-muted">{t.services.description}</p>
          </div>
        )}

        <div className={showIntro ? 'mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3' : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'}>
          {visibleServices.map((service) => {
            const Icon = icons[service.icon] ?? ServerCog;

            return (
              <article
                key={service.title}
                className="group rounded-lg border border-line bg-panel p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-panel-soft"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-accent-soft transition-colors group-hover:border-accent/50 group-hover:bg-accent/20">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-text-main">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-soft">{service.description}</p>
              </article>
            );
          })}
        </div>

        {compact && (
          <Link
            to={localizedPath('services')}
            className="mt-8 inline-flex rounded-md border border-accent/30 px-4 py-3 text-sm font-semibold text-accent-soft transition-colors hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={t.services.fullOfferAria}
          >
            {t.services.fullOffer}
          </Link>
        )}

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-accent">{t.services.audiencesEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-text-main sm:text-4xl">{t.services.audiencesTitle}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.services.audiences.map((audience) => (
              <div
                key={audience}
                className="rounded-lg border border-line bg-panel px-4 py-4 text-sm font-medium text-text-main transition-colors hover:border-accent/40 hover:bg-accent/10"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
