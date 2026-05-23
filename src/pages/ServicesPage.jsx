import PageHero from '../components/PageHero.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import Packages from '../components/Packages.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.pages.services.eyebrow}
        title={t.pages.services.title}
        description={t.pages.services.description}
      />
      <Services showIntro={false} />
      <Process />
      <Packages />
    </>
  );
}
