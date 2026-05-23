import { MailPlus, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const messageCodeMap = {
  validation_failed: 'validation',
  already_subscribed: 'alreadySubscribed',
  invalid_email: 'invalidEmail',
  consent_required: 'consentRequired',
  rate_limited: 'rateLimited',
  newsletter_error: 'error',
  storage_corrupted: 'error',
};

export default function NewsletterSignup({ className = '', compact = false }) {
  const { language, t } = useLanguage();
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      email: String(formData.get('email') || '').trim(),
      consent: formData.get('consent') === 'on',
      language,
    };

    setFormState({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));

      if (response.status === 200 && data.code === 'already_subscribed') {
        form.reset();
        setFormState({ status: 'success', message: t.newsletter.messages.alreadySubscribed });
        return;
      }

      if (response.status === 201) {
        form.reset();
        setFormState({ status: 'success', message: t.newsletter.messages.success });
        return;
      }

      if (response.status === 409 || data.code === 'already_subscribed') {
        form.reset();
        setFormState({ status: 'success', message: t.newsletter.messages.alreadySubscribed });
        return;
      }

      if (!response.ok) {
        const translatedKey = messageCodeMap[data.code];
        throw new Error(translatedKey ? t.newsletter.messages[translatedKey] : data.error || t.newsletter.messages.error);
      }

      form.reset();
      setFormState({ status: 'success', message: t.newsletter.messages.success });
    } catch (error) {
      setFormState({ status: 'error', message: error.message || t.newsletter.messages.error });
    }
  };

  return (
    <section className={className} aria-labelledby={compact ? undefined : 'newsletter-title'}>
      <form
        className={`rounded-lg border border-line bg-panel shadow-card transition-colors ${
          compact ? 'p-4' : 'p-5 sm:p-6'
        }`}
        aria-label={t.newsletter.formAria}
        onSubmit={handleSubmit}
      >
        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/10 text-accent">
            <MailPlus className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{t.newsletter.eyebrow}</p>
            <h2
              id={compact ? undefined : 'newsletter-title'}
              className={`${compact ? 'mt-1 text-base' : 'mt-2 text-xl'} font-bold text-text-main`}
            >
              {t.newsletter.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-text-soft">{t.newsletter.description}</p>
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor={compact ? 'newsletter-email-footer' : 'newsletter-email'} className="text-sm font-medium text-text-main">
            {t.newsletter.emailLabel}
          </label>
          <input
            id={compact ? 'newsletter-email-footer' : 'newsletter-email'}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-label={t.newsletter.emailLabel}
            placeholder={t.newsletter.emailPlaceholder}
            className="mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-text-main outline-none transition-colors placeholder:text-text-soft focus:border-accent"
          />
        </div>

        <label className="mt-4 flex gap-3 text-sm leading-6 text-text-muted">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-line bg-ink text-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
          />
          <span>{t.newsletter.consentLabel}</span>
        </label>

        <button
          type="submit"
          disabled={formState.status === 'loading'}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-70"
          aria-label={t.newsletter.submitAria}
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          {formState.status === 'loading' ? t.newsletter.submitting : t.newsletter.submit}
        </button>

        {formState.message && (
          <p
            className={`mt-4 rounded-md border px-4 py-3 text-sm ${
              formState.status === 'success' ? 'form-status-success' : 'form-status-error'
            }`}
            role="status"
            aria-live="polite"
          >
            {formState.message}
          </p>
        )}
      </form>
    </section>
  );
}
