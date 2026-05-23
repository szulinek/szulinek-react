import { CheckCircle2, ServerCog } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-line py-16 transition-colors sm:py-20" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-accent-soft">
              <ServerCog className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-accent">{t.experience.eyebrow}</p>
            <h2 id="experience-title" className="mt-3 text-3xl font-bold text-text-main sm:text-4xl">
              {t.experience.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-text-muted">{t.profile.description}</p>
          </div>

          <div className="grid gap-4">
            {t.experience.items.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-line bg-panel p-5 shadow-card transition hover:-translate-y-1 hover:border-accent/50 hover:bg-panel-soft"
              >
                <h3 className="text-lg font-semibold text-text-main">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-soft">{item.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
