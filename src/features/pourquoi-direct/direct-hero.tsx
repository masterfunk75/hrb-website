import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/layout/page-hero';
import { photoSrc } from '@/config/photos';
import { Button } from '@/components/ui/button';
import { BOOKING_HREF, PHONE } from '@/config/site';

export function DirectHero() {
  const t = useTranslations('Direct');

  return (
    <PageHero
      eyebrow={t('heroEyebrow')}
      title={t('heroTitle')}
      subtitle={t('heroSubtitle')}
      photoSrc={photoSrc('directHero')}
      photoAlt={t('heroPhoto')}
      photoPriority
    >
      <Button href={BOOKING_HREF}>{t('heroBookCta')}</Button>
      <Button href={PHONE.href} variant="outline">
        {t('heroCallCta')}
      </Button>
    </PageHero>
  );
}
