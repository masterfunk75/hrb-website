import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/page-hero';
import { Button } from '@/components/ui/button';

export function DirectHero() {
  const t = useTranslations('Direct');

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      photoLabel={t('heroPhoto')}
    >
      <Button href="/#booking">{t('heroBookCta')}</Button>
      <Button href="tel:+33149100545" variant="outline">
        {t('heroCallCta')}
      </Button>
    </PageHero>
  );
}
