import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { BookingBar } from '@/features/booking/booking-bar';
import { PHONE } from '@/config/site';

// A2 — Bandeau moteur de réservation. Cible de l'ancre #booking visée par tous
// les CTA « Réserver » du site. Design repris de la maquette V2 (dates + voyageurs
// + code promo), câblé au moteur D-EDGE (voir features/booking/booking-bar).
export function Booking() {
  const t = useTranslations('Home');

  return (
    <section id="booking" className="bg-surface scroll-mt-20 py-16 md:py-24">
      <Container>
        <BookingBar />
        <p className="text-muted mt-4 text-center text-sm">
          {t('bookingNote')}{' '}
          <a
            href={PHONE.href}
            className="text-accent hover:text-primary font-medium"
          >
            {PHONE.display}
          </a>
        </p>
      </Container>
    </section>
  );
}
