import { useTranslations } from 'next-intl';
import { PageCta } from '@/components/layout/page-cta';
import { Button } from '@/components/ui/button';

// §7 — CTA final « Prêt à réserver ? ».
export function DirectFinalCta() {
  const t = useTranslations('Direct');
  const tNav = useTranslations('Nav');

  return (
    <PageCta title={t('finalTitle')} subtitle={t('finalSubtitle')}>
      <Button href="/#booking" variant="light">
        {tNav('book')}
      </Button>
      <Button href="tel:+33149100545" variant="outlineLight">
        {t('finalCallCta')}
      </Button>
    </PageCta>
  );
}
