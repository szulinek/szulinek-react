import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { languageLabels, supportedLanguages } from '../data/navigation.js';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { useTheme } from '../contexts/ThemeContext.jsx';
import LinuxPenguinLogo from './LinuxPenguinLogo.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { changeLanguage, language, localizedPath, navLinks, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);
  const navClassName = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
      isActive ? 'text-accent-soft' : 'text-text-muted hover:bg-accent/10 hover:text-text-main'
    }`;

  return (
    <header className="border-b border-line bg-ink/95 backdrop-blur transition-colors duration-300">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:grid-cols-[13rem_minmax(0,1fr)_auto] lg:px-8 xl:grid-cols-[15rem_minmax(0,1fr)_auto]">
        <Link
          to={localizedPath('home')}
          className="flex min-w-0 max-w-full items-center gap-2 overflow-hidden text-sm font-semibold text-text-main"
          aria-label={t.app.logoAria}
          onClick={closeMenu}
        >
          <LinuxPenguinLogo />
          <span className="truncate">SysOps Linux</span>
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-1 lg:flex" aria-label={t.header.navAria}>
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden min-w-max items-center justify-end gap-1.5 lg:flex">
          <SocialLinks ariaLabel={t.header.socialsAria} compact iconOnly variant="header" />
          <LanguageToggle language={language} onChange={changeLanguage} />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-text-main transition-colors hover:border-accent/40 hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          aria-label={isOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-ink px-4 py-4 transition-colors lg:hidden"
          aria-label={t.header.mobileNavAria}
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive ? 'bg-accent/10 text-accent-soft' : 'text-text-muted hover:bg-accent/10 hover:text-text-main'
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 grid gap-3 border-t border-line pt-4">
              <SocialLinks ariaLabel={t.header.socialsAria} compact variant="menu" />
              <div className="flex items-center justify-between gap-3">
                <LanguageToggle
                  language={language}
                  onChange={(nextLanguage) => {
                    changeLanguage(nextLanguage);
                    closeMenu();
                  }}
                />
                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function LanguageToggle({ language, onChange }) {
  const { t } = useLanguage();

  return (
    <div
      className="inline-flex rounded-md border border-line/70 bg-transparent p-0.5"
      role="group"
      aria-label={t.header.languageAria}
    >
      {supportedLanguages.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={`rounded px-2.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            language === item
              ? 'bg-accent/10 text-accent-soft'
              : 'text-text-muted hover:bg-accent/10 hover:text-text-main'
          }`}
          aria-pressed={language === item}
        >
          {languageLabels[item]}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle({ isDark, onToggle }) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-accent/10 hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      aria-label={isDark ? t.header.themeToLight : t.header.themeToDark}
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
