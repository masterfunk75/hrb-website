import { useTranslations } from 'next-intl';
import { PageCta } from '@/components/layout/page-cta';
import { Button } from '@/components/ui/button';
import { PHONE } from '@/config/site';

// §8 (lot-3) — CTA final de la page Chambres.
export function RoomsCta() {
  const t = useTranslations('Rooms');
  const tNav = useTranslations('Nav');

  return (
    <PageCta title={t('ctaTitle')} subtitle={t('ctaSubtitle')}>
      <Button href="/#booking" variant="light">
        {tNav('book')}
      </Button>
      <Button href={PHONE.href} variant="outlineLight">
        {t('ctaAdvice')}
      </Button>
    </PageCta>
  );
}
