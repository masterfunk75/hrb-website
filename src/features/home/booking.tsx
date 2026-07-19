import { useTranslations, useLocale } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { PHONE, dedgeBookingUrl } from '@/config/site';
import { DedgeCalendar } from '@/features/booking/dedge-calendar';

// A2 — Bandeau moteur de réservation D-EDGE. Cible de l'ancre #booking visée par
// tous les CTA « Réserver » du site. Widget Big Calendar embarqué + repli fiable :
// lien direct vers le moteur sécurisé (marche même sans JS) et réservation par téléphone.
export function Booking() {
  const t = useTranslations('Home');
  const locale = useLocale();

  return (
    <Section
      id="booking"
      eyebrow={t('bookingEyebrow')}
      title={t('bookingTitle')}
      intro={t('bookingIntro')}
      className="bg-surface scroll-mt-20"
    >
      <DedgeCalendar key={locale} />

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted text-sm">{t('bookingNote')}</p>
        <div className="flex flex-wrap gap-3">
          <Button href={dedgeBookingUrl(locale)} variant="outline" newTab>
            {t('bookingDirect')}
          </Button>
          <Button href={PHONE.href}>{t('bookingCta')}</Button>
        </div>
      </div>
    </Section>
  );
}
