import { useTranslations } from 'next-intl';
import { CtaCards, type CtaCard } from '@/components/layout/cta-cards';
import { PHONE } from '@/config/site';

// §10 — CTA final : 3 portes équivalentes (devis / appel / visite).
export function BusinessFinalCta() {
  const t = useTranslations('Business');

  const cards: CtaCard[] = [
    {
      title: t('finalDevisTitle'),
      body: t('finalDevisBody'),
      cta: t('finalDevisCta'),
      href: '#devis',
      variant: 'primary',
    },
    {
      title: t('finalCallTitle'),
      body: t('finalCallBody'),
      cta: PHONE.display,
      href: PHONE.href,
      variant: 'outline',
    },
    {
      title: t('finalVisitTitle'),
      body: t('finalVisitBody'),
      cta: t('finalVisitCta'),
      href: '#devis',
      variant: 'outline',
    },
  ];

  return (
    <CtaCards
      eyebrow={t('finalEyebrow')}
      title={t('finalTitle')}
      intro={t('finalSubtitle')}
      cards={cards}
    />
  );
}
