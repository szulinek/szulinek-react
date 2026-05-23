import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="jak-pracuje" className="scroll-mt-24 border-t border-line py-16 transition-colors sm:py-20" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-accent">{t.process.eyebrow}</p>
          <h2 id="process-title" className="mt-3 text-3xl font-bold text-text-main sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-text-muted">{t.process.description}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {t.process.steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-lg border border-line bg-panel p-5 shadow-card transition hover:-translate-y-1 hover:border-accent/40 hover:bg-panel-soft"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-contrast">
                  {index + 1}
                </span>
                <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-text-main">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-soft">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
