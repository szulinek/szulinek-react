import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import LinuxPenguinLogo from './LinuxPenguinLogo.jsx';
import NewsletterSignup from './NewsletterSignup.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  const { localizedPath, navLinks, t } = useLanguage();

  return (
    <footer className="border-t border-line bg-panel-soft/40 py-10 transition-colors">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.55fr_0.9fr] lg:px-8">
        <div>
          <Link
            to={localizedPath('home')}
            className="inline-flex rounded-md p-1 text-text-main transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={t.app.logoAria}
          >
            <LinuxPenguinLogo />
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-text-soft">{t.footer.description}</p>
          <SocialLinks ariaLabel={t.footer.socialsAria} compact className="mt-5" />
          <p className="mt-6 text-sm text-text-soft">© {new Date().getFullYear()} szulinek.pl. {t.footer.copyright}</p>
        </div>

        <nav className="grid gap-2 sm:grid-cols-2" aria-label={t.footer.quickLinksAria}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="rounded-md px-3 py-2 text-sm text-text-muted transition-colors hover:bg-accent/10 hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NewsletterSignup compact />
      </div>
    </footer>
  );
}
