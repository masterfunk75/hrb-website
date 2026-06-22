import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/page-hero';
import { Button } from '@/components/ui/button';

export function RoomsHero() {
  const t = useTranslations('Rooms');
  const tNav = useTranslations('Nav');

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      photoLabel="Chambres — hero (BRH_089)"
    >
      <Button href="/#booking">{tNav('book')}</Button>
      <Button href="tel:+33149100545" variant="outline">
        {t('heroCallCta')}
      </Button>
    </PageHero>
  );
}
