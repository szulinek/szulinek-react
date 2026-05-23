import PageHero from '../components/PageHero.jsx';
import Experience from '../components/Experience.jsx';
import Skills from '../components/Skills.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.pages.experience.eyebrow}
        title={t.pages.experience.title}
        description={t.pages.experience.description}
      />
      <Experience />
      <Skills />
    </>
  );
}
