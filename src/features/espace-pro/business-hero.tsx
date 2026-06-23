import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/page-hero';
import { Button } from '@/components/ui/button';

export function BusinessHero() {
  const t = useTranslations('Business');

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      photoLabel={t('heroPhoto')}
    >
      <Button href="#devis">{t('heroQuoteCta')}</Button>
      <Button href="tel:+33149100545" variant="outline">
        {t('heroCallCta')}
      </Button>
    </PageHero>
  );
}
