import { useTranslations } from 'next-intl';
import { PageCta } from '@/components/layout/page-cta';
import { Button } from '@/components/ui/button';

// §5 — Réservez maintenant : CTA fort central + rappel téléphone.
export function DirectBooking() {
  const t = useTranslations('Direct');

  return (
    <PageCta
      title={t('bookingTitle')}
      subtitle={t('bookingBody')}
      note={t.rich('bookingNote', {
        phone: (chunks) => (
          <a href="tel:+33149100545" className="underline">
            {chunks}
          </a>
        ),
      })}
    >
      <Button href="/#booking" variant="light">
        {t('bookingCta')}
      </Button>
    </PageCta>
  );
}
