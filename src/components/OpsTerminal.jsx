import { Activity, TerminalSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import LinuxPenguinLogo from './LinuxPenguinLogo.jsx';

export default function OpsTerminal() {
  const { t } = useLanguage();
  const terminalProfile = t.terminalProfile;

  return (
    <section className="border-t border-line bg-panel-soft/30 py-12 transition-colors" aria-labelledby="ops-terminal-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-lg border border-terminal/25 bg-terminal-panel shadow-glow">
            <div className="absolute inset-0 terminal-grid opacity-70" aria-hidden="true" />
            <div className="scan-line absolute inset-x-0 top-0 hidden h-20 animate-scan bg-terminal/10 md:block" aria-hidden="true" />

            <div className="relative flex items-center gap-3 border-b border-terminal/20 bg-terminal/5 px-4 py-3">
              <LinuxPenguinLogo className="scale-75" />
              <span className="flex items-center gap-2 text-xs font-medium text-terminal">
                <TerminalSquare className="h-4 w-4" aria-hidden="true" />
                {terminalProfile.session}
              </span>
            </div>

            <div className="relative p-5 font-mono text-sm leading-7 sm:p-6">
              <h2 id="ops-terminal-title" className="sr-only">
                {terminalProfile.title}
              </h2>
              <p className="text-terminal">
                {terminalProfile.prompt}
                <span className="terminal-caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-terminal" aria-hidden="true" />
              </p>
              <div className="mt-4 space-y-1 text-text-muted">
                {terminalProfile.lines.map((line) => {
                  const [label, ...rest] = line.split(/\s{2,}/);
                  return (
                    <p key={line}>
                      <span className="text-terminal">{label}</span>
                      <span className="text-text-soft"> :: </span>
                      <span>{rest.join(' ')}</span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {terminalProfile.metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-line bg-panel p-4 shadow-card transition-colors">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-main">
                  <Activity className="h-4 w-4 text-accent" aria-hidden="true" />
                  {metric.label}
                </div>
                <p className="text-sm leading-6 text-text-soft">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
