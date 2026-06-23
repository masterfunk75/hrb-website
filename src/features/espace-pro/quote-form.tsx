'use client';

import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';

const fieldClass =
  'border-line-strong bg-canvas text-ink focus:border-primary w-full rounded-md border px-3 py-2 text-sm outline-none transition-colors';

function Field({
  htmlFor,
  label,
  required,
  className,
  children,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`flex flex-col gap-1.5 ${className ?? ''}`}
    >
      <span className="text-ink text-sm font-medium">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}

// §7 — Formulaire de devis. Validation HTML5 native côté client ; l'envoi est
// stubé (à brancher sur le back-office Thaïs / un email corpo quand disponible).
export function QuoteForm() {
  const t = useTranslations('Business');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO(backend) : brancher l'envoi réel quand le canal corpo est défini.
    setSubmitted(true);
  }

  return (
    <Section
      id="devis"
      eyebrow={t('formEyebrow')}
      title={t('formTitle')}
      intro={t('formSubtitle')}
      className="scroll-mt-20"
    >
      {submitted ? (
        <div className="border-line bg-success-soft max-w-3xl rounded-lg border p-6">
          <p className="text-primary font-display text-lg">
            {t('formSuccessTitle')}
          </p>
          <p className="text-muted mt-1 text-sm">{t('formSuccessBody')}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid max-w-3xl gap-8">
          <fieldset className="grid gap-4 sm:grid-cols-2">
            <legend className="text-accent col-span-full mb-3 font-mono text-xs tracking-[0.2em] uppercase">
              {t('formIdentity')}
            </legend>
            <Field htmlFor="qf-name" label={t('formName')} required>
              <input
                id="qf-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={fieldClass}
              />
            </Field>
            <Field htmlFor="qf-company" label={t('formCompany')} required>
              <input
                id="qf-company"
                name="company"
                type="text"
                required
                autoComplete="organization"
                className={fieldClass}
              />
            </Field>
            <Field htmlFor="qf-role" label={t('formRole')}>
              <input
                id="qf-role"
                name="role"
                type="text"
                autoComplete="organization-title"
                className={fieldClass}
              />
            </Field>
            <Field htmlFor="qf-email" label={t('formEmail')} required>
              <input
                id="qf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </Field>
            <Field htmlFor="qf-phone" label={t('formPhone')}>
              <input
                id="qf-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={fieldClass}
              />
            </Field>
          </fieldset>

          <fieldset className="grid gap-4 sm:grid-cols-2">
            <legend className="text-accent col-span-full mb-3 font-mono text-xs tracking-[0.2em] uppercase">
              {t('formNeed')}
            </legend>
            <Field htmlFor="qf-stay" label={t('formStayType')}>
              <select
                id="qf-stay"
                name="stayType"
                defaultValue="court"
                className={fieldClass}
              >
                <option value="court">{t('formStayShort')}</option>
                <option value="long">{t('formStayLong')}</option>
                <option value="mixte">{t('formStayMixed')}</option>
              </select>
            </Field>
            <Field htmlFor="qf-volume" label={t('formVolume')}>
              <select
                id="qf-volume"
                name="volume"
                defaultValue="lt10"
                className={fieldClass}
              >
                <option value="lt10">{t('formVol1')}</option>
                <option value="10-50">{t('formVol2')}</option>
                <option value="50-200">{t('formVol3')}</option>
                <option value="200+">{t('formVol4')}</option>
              </select>
            </Field>
            <Field htmlFor="qf-start" label={t('formStartDate')}>
              <input
                id="qf-start"
                name="startDate"
                type="date"
                className={fieldClass}
              />
            </Field>
            <Field
              htmlFor="qf-notes"
              label={t('formNotes')}
              className="sm:col-span-2"
            >
              <textarea
                id="qf-notes"
                name="notes"
                rows={4}
                maxLength={500}
                className={fieldClass}
              />
            </Field>
          </fieldset>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="bg-primary text-on-emphasis hover:bg-primary-hover inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
            >
              {t('formSubmit')}
            </button>
            <span className="text-muted text-xs">{t('formRequired')}</span>
          </div>
        </form>
      )}
    </Section>
  );
}
