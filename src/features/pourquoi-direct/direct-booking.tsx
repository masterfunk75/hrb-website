import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { BOOKING_HREF, PHONE } from '@/config/site';

// §5 — Réservez maintenant : CTA central fort (le plus visible de la page).
// Traitement distinct du bandeau de clôture (DirectFinalCta) pour ne pas le banaliser.
export function DirectBooking() {
  const t = useTranslations('Direct');

  return (
    <Section>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <h2 className="font-display text-primary text-3xl font-normal sm:text-4xl">
          {t('bookingTitle')}
        </h2>
        <p className="text-muted">{t('bookingBody')}</p>
        <Button href={BOOKING_HREF} className="px-8 py-3 text-base">
          {t('bookingCta')}
        </Button>
        <p className="text-muted text-sm">
          {t.rich('bookingNote', {
            phone: (chunks) => (
              <a
                href={PHONE.href}
                className="text-accent hover:text-primary underline"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </Section>
  );
}
