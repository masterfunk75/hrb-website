import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/page-hero';
import { photoSrc } from '@/config/photos';
import { Button } from '@/components/ui/button';
import { BOOKING_HREF } from '@/config/site';

export function AboutHero() {
  const t = useTranslations('About');
  const tNav = useTranslations('Nav');

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      photoSrc={photoSrc('aproposHero')}
      photoAlt={t('heroPhoto')}
      photoPriority
    >
      <Button href={BOOKING_HREF}>{tNav('book')}</Button>
      <Button href="/contact" variant="outline">
        {t('heroContactCta')}
      </Button>
    </PageHero>
  );
}
