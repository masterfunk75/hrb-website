import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';

// A3 (lot-3) — « Deux étages, deux logiques » : vue d'ensemble des logements.
export function RoomsOverview() {
  const t = useTranslations('Rooms');

  return (
    <Section eyebrow={t('overviewEyebrow')} title={t('overviewTitle')}>
      <div className="text-muted max-w-2xl space-y-4">
        <p>{t('overviewBody1')}</p>
        <p>{t('overviewBody2')}</p>
      </div>
      <p className="font-display text-primary mt-8 max-w-2xl text-lg italic">
        {t('overviewSignature')}
      </p>
    </Section>
  );
}
