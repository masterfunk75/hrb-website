import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { Section } from '@/components/ui/section';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';

// Coordonnées : adresse, téléphone, horaires, accès + plan (placeholder).
export function ContactDetails() {
  const t = useTranslations('Contact');

  const details: { label: string; value: ReactNode }[] = [
    { label: t('addressLabel'), value: t('addressValue') },
    {
      label: t('phoneLabel'),
      value: (
        <a
          href="tel:+33149100545"
          className="hover:text-primary transition-colors"
        >
          {t('phoneValue')}
        </a>
      ),
    },
    { label: t('hoursLabel'), value: t('hoursValue') },
    { label: t('accessLabel'), value: t('accessValue') },
  ];

  return (
    <Section eyebrow={t('detailsEyebrow')} title={t('detailsTitle')}>
      <div className="grid items-start gap-10 md:grid-cols-2">
        <dl className="flex flex-col gap-6">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
                {detail.label}
              </dt>
              <dd className="text-ink mt-1">{detail.value}</dd>
            </div>
          ))}
        </dl>
        <PhotoPlaceholder ratio="4/3" label={t('mapPhoto')} />
      </div>
    </Section>
  );
}
