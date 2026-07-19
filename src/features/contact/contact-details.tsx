import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { Section } from '@/components/ui/section';
import { Photo } from '@/components/ui/photo';
import { PHONE } from '@/config/site';
import { QUARTIER_MAP_SRC } from '@/config/photos';

// Coordonnées : adresse, téléphone, horaires, accès + plan (placeholder).
export function ContactDetails() {
  const t = useTranslations('Contact');

  const details: { label: string; value: ReactNode }[] = [
    { label: t('addressLabel'), value: t('addressValue') },
    {
      label: t('phoneLabel'),
      value: (
        <a href={PHONE.href} className="hover:text-primary transition-colors">
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
        <Photo
          src={QUARTIER_MAP_SRC}
          alt={t('mapPhoto')}
          ratio="4/3"
          fit="contain"
        />
      </div>
    </Section>
  );
}
