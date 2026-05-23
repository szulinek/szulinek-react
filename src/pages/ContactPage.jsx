import PageHero from '../components/PageHero.jsx';
import Contact from '../components/Contact.jsx';
import { useLanguage } from '../contexts/LanguageContext.jsx';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.pages.contact.eyebrow}
        title={t.pages.contact.title}
        description={t.pages.contact.description}
      />
      <Contact />
    </>
  );
}
