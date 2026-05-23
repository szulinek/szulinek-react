import { Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../data/socials.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const variantClassNames = {
  default:
    'border border-terminal/25 bg-terminal/10 font-semibold text-terminal shadow-card hover:border-terminal/40 hover:bg-terminal/20 focus-visible:outline-terminal',
  header:
    'text-text-muted hover:bg-accent/10 hover:text-accent-soft focus-visible:outline-accent',
  menu:
    'border border-line bg-panel text-text-muted hover:border-accent/40 hover:bg-accent/10 hover:text-accent-soft focus-visible:outline-accent',
};

export default function SocialLinks({ ariaLabel, className = '', compact = false, iconOnly = false, variant = 'default' }) {
  const { t } = useLanguage();
  const variantClassName = variantClassNames[variant] || variantClassNames.default;

  return (
    <nav className={`flex flex-wrap items-center gap-3 ${className}`} aria-label={ariaLabel || t.socials.navLabel}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.label] || Github;

        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={t.socials.ariaLabels[link.key]}
            className={`inline-flex items-center justify-center gap-2 rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClassName} ${
              iconOnly ? 'h-9 w-9 px-0 py-0' : compact ? 'px-3 py-2 text-xs font-semibold' : 'px-4 py-2.5 text-sm font-semibold'
            }`}
          >
            <Icon className={compact ? 'h-4 w-4' : 'h-5 w-5'} aria-hidden="true" />
            {!iconOnly && link.label}
          </a>
        );
      })}
    </nav>
  );
}
