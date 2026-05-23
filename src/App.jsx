import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SEO from './components/SEO.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import TerminalBar from './components/TerminalBar.jsx';
import { legacyRedirects, routeConfig, supportedLanguages } from './data/navigation.js';
import { useLanguage } from './contexts/LanguageContext.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage.jsx'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const pageComponents = {
  home: Home,
  services: ServicesPage,
  technologies: TechnologiesPage,
  experience: ExperiencePage,
  contact: ContactPage,
};

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-ink text-text-main antialiased transition-colors duration-300">
      <a className="skip-link" href="#main">
        {t.app.skipLink}
      </a>
      <ScrollToTop />
      <SEO />
      <Header />
      <TerminalBar />
      <Suspense fallback={<PageFallback />}>
        <main id="main">
          <Routes>
            <Route path="/" element={<Navigate to="/pl" replace />} />
            {Object.entries(legacyRedirects).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            {routeConfig.flatMap((route) =>
              supportedLanguages.map((language) => {
                const Page = pageComponents[route.key];
                return <Route key={`${language}-${route.key}`} path={route.paths[language]} element={<Page />} />;
              }),
            )}
            <Route path="/pl/*" element={<NotFound />} />
            <Route path="/en/*" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

function PageFallback() {
  return <main id="main" className="min-h-[110vh]" aria-busy="true" aria-hidden="true" />;
}
