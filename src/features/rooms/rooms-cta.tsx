import { useTranslations } from 'next-intl';
import { PageCta } from '@/components/layout/page-cta';
import { Button } from '@/components/ui/button';

// §8 (lot-3) — CTA final de la page Chambres.
export function RoomsCta() {
  const t = useTranslations('Rooms');
  const tNav = useTranslations('Nav');

  return (
    <PageCta title={t('ctaTitle')} subtitle={t('ctaSubtitle')}>
      <Button href="/#booking" variant="light">
        {tNav('book')}
      </Button>
      <Button href="tel:+33149100545" variant="outlineLight">
        {t('ctaAdvice')}
      </Button>
    </PageCta>
  );
}
