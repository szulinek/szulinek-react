import { Cpu, Layers3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Technologies({ compact = false, showIntro = true }) {
  const { t } = useLanguage();
  const groups = compact ? t.technologies.groups.slice(0, 3) : t.technologies.groups;

  return (
    <section
      className="scroll-mt-24 border-t border-line bg-panel-soft/30 py-16 transition-colors sm:py-20"
      aria-label={showIntro ? undefined : t.technologies.aria}
      aria-labelledby={showIntro ? 'technologies-title' : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={showIntro ? 'grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center' : ''}>
          {showIntro && (
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-accent-soft">
                <Layers3 className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-accent">{t.technologies.eyebrow}</p>
              <h2 id="technologies-title" className="mt-3 text-3xl font-bold text-text-main sm:text-4xl">
                {t.technologies.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-text-muted">{t.technologies.description}</p>
            </div>
          )}

          <div className="rounded-lg border border-line bg-panel p-4 shadow-card transition-colors sm:p-6">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-text-main">
              <Cpu className="h-5 w-5 text-accent" aria-hidden="true" />
              {t.technologies.stackLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {t.technologies.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-panel-soft px-3 py-2 text-sm text-text-main transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="rounded-lg border border-line bg-panel p-5 shadow-card transition-colors">
              <h3 className="text-base font-semibold text-text-main">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md bg-accent/10 px-3 py-2 text-xs font-medium text-accent-soft">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
