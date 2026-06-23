import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/page-hero';
import { Button } from '@/components/ui/button';

export function AboutHero() {
  const t = useTranslations('About');
  const tNav = useTranslations('Nav');

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      photoLabel={t('heroPhoto')}
    >
      <Button href="/#booking">{tNav('book')}</Button>
      <Button href="/contact" variant="outline">
        {t('heroContactCta')}
      </Button>
    </PageHero>
  );
}
