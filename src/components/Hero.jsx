import { ArrowRight, CalendarCheck, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Hero() {
  const { localizedPath, t } = useLanguage();

  return (
    <section
      className="relative isolate overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
      aria-labelledby="hero-title"
    >
      <div className="hero-grid absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-panel absolute inset-x-0 top-10 -z-10 mx-auto h-[520px] max-w-7xl px-4 sm:px-6 lg:top-14 lg:px-8" aria-hidden="true">
        <div className="ml-auto hidden h-full max-w-3xl opacity-70 lg:block">
          <div className="relative h-full overflow-hidden border border-accent/10 bg-panel/40 shadow-glow backdrop-blur-sm">
            <div className="scan-line absolute inset-x-0 top-0 h-24 animate-scan bg-accent/10" />
            <div className="grid h-full grid-cols-3 gap-px bg-accent/10 p-px">
              <div className="bg-ink/80 p-5">
                <div className="mb-5 flex items-center gap-2 text-xs text-accent-soft">
                  <Cpu className="h-4 w-4" />
                  node-01
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-4/5 bg-accent/70" />
                  <div className="h-2 w-2/3 bg-emerald-300/70" />
                  <div className="h-2 w-3/5 bg-amber-200/70" />
                </div>
              </div>
              <div className="bg-ink/70 p-5">
                <div className="mb-5 flex items-center gap-2 text-xs text-accent-soft">
                  <ShieldCheck className="h-4 w-4" />
                  firewall
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-3/4 bg-emerald-300/70" />
                  <div className="h-2 w-11/12 bg-accent/70" />
                  <div className="h-2 w-1/2 bg-text-soft/50" />
                </div>
              </div>
              <div className="bg-ink/80 p-5">
                <div className="mb-5 flex items-center gap-2 text-xs text-accent-soft">
                  <CheckCircle2 className="h-4 w-4" />
                  uptime
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-10/12 bg-accent/70" />
                  <div className="h-2 w-7/12 bg-emerald-300/70" />
                  <div className="h-2 w-5/12 bg-text-soft/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-accent/25 bg-accent/10 px-3 py-2 text-sm font-medium text-accent-soft">
            <span className="h-2 w-2 rounded-sm bg-emerald-300" aria-hidden="true" />
            {t.profile.badge}
          </p>
          <h1 id="hero-title" className="max-w-4xl text-4xl font-bold leading-tight text-text-main sm:text-5xl lg:text-6xl">
            {t.profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
            {t.profile.lead}
          </p>
          <div className="mt-9 flex flex-col gap-5">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to={localizedPath('contact')}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={t.hero.consultationAria}
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                {t.hero.consultation}
              </Link>
              <Link
                to={localizedPath('services')}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-panel px-5 py-3 text-sm font-semibold text-text-main transition-colors hover:border-accent/50 hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={t.hero.servicesAria}
              >
                {t.hero.servicesCta}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <SocialLinks ariaLabel={t.hero.socialsAria} />
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-3xl" aria-label={t.hero.statusAria}>
          {t.hero.statusItems.map((item) => (
            <div key={item.label} className="rounded-lg border border-line bg-panel/70 p-4 shadow-card backdrop-blur transition-colors">
              <p className="text-sm font-semibold text-text-main">{item.label}</p>
              <p className="mt-1 text-sm text-text-soft">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
