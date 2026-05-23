import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Contact() {
  const { language, t } = useLanguage();
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.language = language;

    setFormState({ status: 'sending', message: t.contact.form.sendingStatus });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || t.contact.form.errorDefault);
      }

      form.reset();
      setFormState({
        status: 'success',
        message: t.contact.form.success,
      });
    } catch (error) {
      setFormState({
        status: 'error',
        message: error.message || t.contact.form.errorFallback,
      });
    }
  };

  return (
    <section id="kontakt" className="scroll-mt-24 border-t border-line py-16 transition-colors sm:py-20" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-accent">{t.contact.eyebrow}</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold text-text-main sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-base leading-7 text-text-muted">{t.contact.description}</p>
          <a
            href={`mailto:${t.profile.email}`}
            className="mt-8 inline-flex items-center gap-3 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent-soft transition-colors hover:bg-accent/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`${t.contact.emailAria} ${t.profile.email}`}
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            {t.contact.emailCta} {t.profile.email}
          </a>
          <SocialLinks ariaLabel={t.contact.socialsAria} className="mt-5" />
        </div>

        <form className="rounded-lg border border-line bg-panel p-5 shadow-card transition-colors sm:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-text-main">
                {t.contact.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-soft focus:border-accent"
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-text-main">
                {t.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-soft focus:border-accent"
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="subject" className="text-sm font-medium text-text-main">
              {t.contact.form.subject}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-soft focus:border-accent"
              placeholder={t.contact.form.subjectPlaceholder}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="body" className="text-sm font-medium text-text-main">
              {t.contact.form.message}
            </label>
            <textarea
              id="body"
              name="message"
              rows="6"
              required
              className="mt-2 w-full resize-y rounded-md border border-line bg-ink px-4 py-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-soft focus:border-accent"
              placeholder={t.contact.form.messagePlaceholder}
            />
          </div>
          <button
            type="submit"
            disabled={formState.status === 'sending'}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            aria-label={t.contact.form.submitAria}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {formState.status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
          </button>
          {formState.message && (
            <p
              className={`mt-4 rounded-md border px-4 py-3 text-sm ${
                formState.status === 'error'
                  ? 'form-status-error'
                  : 'form-status-success'
              }`}
              role="status"
              aria-live="polite"
            >
              {formState.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
