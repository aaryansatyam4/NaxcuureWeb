import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRightIcon, CheckIcon, SpinnerIcon } from './icons';

const FORM_ENDPOINT = 'https://formspree.io/f/xblpnada';

interface ContactFormProps {
  idPrefix: string;
  defaultMessage?: string;
  product?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ idPrefix, defaultMessage = '', product }) => {
  const { t, u } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setError(false);
    setSubmitted(false);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const c = t.home.contactSection;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {product && <input type="hidden" name="product" value={product} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">{c.formName}</label>
          <input type="text" id={`${idPrefix}-name`} name="name" autoComplete="name" className="field" required />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">{c.formEmail}</label>
          <input type="email" id={`${idPrefix}-email`} name="email" autoComplete="email" className="field" required />
        </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-message`} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">{c.formMessage}</label>
        <textarea id={`${idPrefix}-message`} name="message" rows={5} defaultValue={defaultMessage} className="field resize-none" required />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="group flex w-full items-center justify-between rounded-full bg-ink py-2 pl-7 pr-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary disabled:opacity-60"
      >
        <span>{submitting ? u.submitting : c.formSubmit}</span>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-accent transition-transform duration-300 group-hover:-rotate-45">
          {submitting ? <SpinnerIcon className="h-4 w-4" /> : <ArrowUpRightIcon className="h-4 w-4" strokeWidth={2.2} />}
        </span>
      </button>
      <div aria-live="polite">
        {submitted && (
          <p className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <CheckIcon className="h-4 w-4" /> {t.contact.formSuccess}
          </p>
        )}
        {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{t.contact.formError}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
