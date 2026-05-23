import { Activity, Boxes, CloudCog, Database, Globe2, HardDrive, Network, ShieldCheck, TerminalSquare, Workflow } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const iconMap = {
  linux: TerminalSquare,
  cloud: CloudCog,
  containers: Boxes,
  automation: Workflow,
  monitoring: Activity,
  databases: Database,
  networking: Network,
  storage: HardDrive,
  web: Globe2,
};

function resolveIcon(title) {
  const key = title.toLowerCase();

  if (key.includes('linux')) return iconMap.linux;
  if (key.includes('cloud')) return iconMap.cloud;
  if (key.includes('containers')) return iconMap.containers;
  if (key.includes('automation')) return iconMap.automation;
  if (key.includes('monitoring')) return iconMap.monitoring;
  if (key.includes('databases')) return iconMap.databases;
  if (key.includes('networking')) return iconMap.networking;
  if (key.includes('storage')) return iconMap.storage;
  if (key.includes('web')) return iconMap.web;

  return ShieldCheck;
}

export default function Skills({ compact = false }) {
  const { t } = useLanguage();
  const groups = compact ? t.skills.groups.slice(0, 4) : t.skills.groups;

  return (
    <section className="border-t border-line bg-panel-soft/30 py-16 transition-colors sm:py-20" aria-labelledby="skills-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent">{t.skills.eyebrow}</p>
          <h2 id="skills-title" className="mt-3 text-3xl font-bold text-text-main sm:text-4xl">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-text-muted">{t.skills.description}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => {
            const Icon = resolveIcon(group.title);

            return (
              <article
                key={group.title}
                className="rounded-lg border border-line bg-panel p-5 shadow-card transition hover:-translate-y-1 hover:border-accent/50 hover:bg-panel-soft"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-accent-soft">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-text-main">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-soft">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-line bg-panel-soft px-3 py-2 text-xs font-medium text-text-main">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
