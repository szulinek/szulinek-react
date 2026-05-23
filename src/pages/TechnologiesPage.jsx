import PageHero from '../components/PageHero.jsx';
import OpsTerminal from '../components/OpsTerminal.jsx';
import Technologies from '../components/Technologies.jsx';
import Skills from '../components/Skills.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function TechnologiesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.pages.technologies.eyebrow}
        title={t.pages.technologies.title}
        description={t.pages.technologies.description}
      />
      <OpsTerminal />
      <Technologies showIntro={false} />
      <Skills />
    </>
  );
}
