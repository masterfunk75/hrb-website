import { useTranslations } from 'next-intl';
import { CtaCards, type CtaCard } from '@/components/layout/cta-cards';
import { BOOKING_HREF, PHONE } from '@/config/site';

// §6 — CTA final : 3 cards d'invitation, la première (Réserver) accentuée.
export function AboutFinalCta() {
  const t = useTranslations('About');

  const cards: CtaCard[] = [
    {
      title: t('finalBookTitle'),
      body: t('finalBookBody'),
      cta: t('finalBookCta'),
      href: BOOKING_HREF,
      variant: 'primary',
      accent: true,
    },
    {
      title: t('finalVisitTitle'),
      body: t('finalVisitBody'),
      cta: t('finalVisitCta'),
      href: '/contact',
      variant: 'outline',
    },
    {
      title: t('finalCallTitle'),
      body: t('finalCallBody'),
      cta: PHONE.display,
      href: PHONE.href,
      variant: 'outline',
    },
  ];

  return (
    <CtaCards
      title={t('finalTitle')}
      intro={t('finalSubtitle')}
      className="bg-surface"
      cards={cards}
    />
  );
}
