import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/page-hero';
import { photoSrc } from '@/config/photos';
import { Button } from '@/components/ui/button';
import { BOOKING_HREF } from '@/config/site';

// Hero de la page Le Quartier — réutilise PageHero (2 col + photo 4:5).
export function QuartierHero() {
  const t = useTranslations('Neighborhood');
  const tNav = useTranslations('Nav');

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      photoSrc={photoSrc('quartierHero')}
      photoAlt={t('heroPhoto')}
      photoPriority
    >
      <Button href={BOOKING_HREF}>{tNav('book')}</Button>
      <Button href="#autour" variant="outline">
        {t('heroAroundCta')}
      </Button>
    </PageHero>
  );
}
