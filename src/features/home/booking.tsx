import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { PHONE } from '@/config/site';

// A2 — Bandeau moteur de réservation. Cible de l'ancre #booking visée par tous
// les CTA « Réserver » du site. Le moteur Thaïs n'est pas branché en V1 :
// placeholder de sélecteur de dates + réservation par téléphone (fonctionnelle).
const dateFields = [
  'bookingArrival',
  'bookingDeparture',
  'bookingGuests',
] as const;

export function Booking() {
  const t = useTranslations('Home');

  return (
    <Section
      id="booking"
      eyebrow={t('bookingEyebrow')}
      title={t('bookingTitle')}
      intro={t('bookingIntro')}
      className="bg-surface scroll-mt-20"
    >
      <div className="border-line bg-canvas flex flex-col gap-4 rounded-lg border p-6 sm:flex-row sm:items-end">
        <div className="grid flex-1 gap-4 sm:grid-cols-3">
          {dateFields.map((field) => (
            <div key={field} className="flex flex-col gap-1">
              <span className="text-muted text-xs font-medium tracking-wide uppercase">
                {t(field)}
              </span>
              <div className="border-line-strong text-muted/50 rounded-md border border-dashed px-3 py-2 text-sm">
                —
              </div>
            </div>
          ))}
        </div>
        <Button href={PHONE.href}>{t('bookingCta')}</Button>
      </div>
      <p className="text-muted mt-3 text-sm">{t('bookingNote')}</p>
    </Section>
  );
}
