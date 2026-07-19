import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/page-hero';
import { Button } from '@/components/ui/button';
import { BOOKING_HREF, PHONE } from '@/config/site';
import { photoSrc } from '@/config/photos';

export function RoomsHero() {
  const t = useTranslations('Rooms');
  const tNav = useTranslations('Nav');

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      photoSrc={photoSrc('chambresHero')}
      photoAlt={t('heroPhoto')}
      photoPriority
    >
      <Button href={BOOKING_HREF}>{tNav('book')}</Button>
      <Button href={PHONE.href} variant="outline">
        {t('heroCallCta')}
      </Button>
    </PageHero>
  );
}
