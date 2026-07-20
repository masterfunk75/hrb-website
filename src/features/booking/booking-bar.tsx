'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { DEDGE } from '@/config/site';

// Bandeau de réservation — design repris de la maquette V2 (dates, steppers
// voyageurs, code promo), câblé au moteur D-EDGE via son formulaire officiel
// « mini-moteur » : POST vers secure-hotel-booking.com avec arrivalDate (yyyy-MM-dd,
// fourni nativement par <input type="date">), nights (entier) et les compteurs.
// Le formulaire NAVIGUE vers D-EDGE (nouvel onglet) → fonctionne sur tout domaine.
export function BookingBar() {
  const t = useTranslations('Home');
  const locale = useLocale();

  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promo, setPromo] = useState('');
  const [error, setError] = useState(false);

  const lang = locale === 'en' ? 'en-US' : 'fr-FR';
  const action = `https://www.secure-hotel-booking.com/${DEDGE.hotelSlug}/${DEDGE.hotelCode}/search?hotelId=${DEDGE.hotelId}`;

  const nights =
    arrival && departure
      ? Math.round(
          (new Date(departure).getTime() - new Date(arrival).getTime()) /
            86_400_000,
        )
      : 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!arrival || !departure || nights < 1) {
      e.preventDefault();
      setError(true);
    }
  }

  return (
    <form
      className="booking-card"
      action={action}
      method="post"
      target="_blank"
      rel="noopener"
      onSubmit={handleSubmit}
    >
      <span className="booking-eyebrow">{t('bookingEyebrow')}</span>

      <div className="booking-fields">
        <label className="bf">
          <span className="bf__label">{t('bookingArrival')}</span>
          <input
            className="bf__date"
            type="date"
            value={arrival}
            aria-label={t('bookingArrival')}
            onChange={(e) => {
              setArrival(e.target.value);
              setError(false);
            }}
          />
        </label>

        <label className="bf">
          <span className="bf__label">{t('bookingDeparture')}</span>
          <input
            className="bf__date"
            type="date"
            value={departure}
            min={arrival || undefined}
            aria-label={t('bookingDeparture')}
            onChange={(e) => {
              setDeparture(e.target.value);
              setError(false);
            }}
          />
        </label>

        <div className="bf">
          <span className="bf__label">{t('bookingGuests')}</span>
          <div className="bf__steppers">
            <div className="bf-stepper">
              <button
                type="button"
                aria-label={t('bookingLessAdults')}
                disabled={adults <= 1}
                onClick={() => setAdults((a) => Math.max(1, a - 1))}
              >
                −
              </button>
              <span className="bf-stepper__txt">
                {t('bookingAdults', { count: adults })}
              </span>
              <button
                type="button"
                aria-label={t('bookingMoreAdults')}
                disabled={adults >= 6}
                onClick={() => setAdults((a) => Math.min(6, a + 1))}
              >
                +
              </button>
            </div>
            <div className="bf-stepper">
              <button
                type="button"
                aria-label={t('bookingLessChildren')}
                disabled={children <= 0}
                onClick={() => setChildren((c) => Math.max(0, c - 1))}
              >
                −
              </button>
              <span className="bf-stepper__txt">
                {t('bookingChildren', { count: children })}
              </span>
              <button
                type="button"
                aria-label={t('bookingMoreChildren')}
                disabled={children >= 4}
                onClick={() => setChildren((c) => Math.min(4, c + 1))}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="booking-submit bg-primary text-on-emphasis hover:bg-primary-hover inline-flex items-center justify-center rounded-full font-medium transition duration-200 motion-safe:active:scale-[0.98]"
        >
          {t('bookingCta')}
        </button>
      </div>

      <div className="booking-promo">
        {promoOpen ? (
          <div className="booking-promo__wrap">
            <input
              className="booking-promo__input"
              type="text"
              name="rate"
              value={promo}
              placeholder={t('bookingPromoPlaceholder')}
              aria-label={t('bookingPromoPlaceholder')}
              onChange={(e) => setPromo(e.target.value)}
            />
          </div>
        ) : (
          <button
            type="button"
            className="booking-promo__link"
            onClick={() => setPromoOpen(true)}
          >
            {t('bookingPromo')}
          </button>
        )}
      </div>

      {error && (
        <p className="booking-error" role="alert">
          {t('bookingError')}
        </p>
      )}

      {/* Champs soumis à D-EDGE (mini-moteur officiel). */}
      <input type="hidden" name="language" value={lang} />
      <input type="hidden" name="arrivalDate" value={arrival} />
      <input
        type="hidden"
        name="nights"
        value={nights > 0 ? String(nights) : ''}
      />
      <input type="hidden" name="guestCountSelector" value="ReadOnly" />
      <input type="hidden" name="crossSell" value="false" />
      <input type="hidden" name="selectedAdultCount" value={String(adults)} />
      <input type="hidden" name="selectedChildCount" value={String(children)} />
      <input type="hidden" name="selectedInfantCount" value="0" />
    </form>
  );
}
