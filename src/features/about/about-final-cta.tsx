import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BOOKING_HREF, PHONE } from '@/config/site';

// §6 — CTA final : 3 cards d'invitation, la première (Réserver) accentuée.
export function AboutFinalCta() {
  const t = useTranslations('About');

  const cards = [
    {
      title: t('finalBookTitle'),
      body: t('finalBookBody'),
      cta: t('finalBookCta'),
      href: BOOKING_HREF,
      variant: 'primary' as const,
      accent: true,
    },
    {
      title: t('finalVisitTitle'),
      body: t('finalVisitBody'),
      cta: t('finalVisitCta'),
      href: '/contact',
      variant: 'outline' as const,
      accent: false,
    },
    {
      title: t('finalCallTitle'),
      body: t('finalCallBody'),
      cta: PHONE.display,
      href: PHONE.href,
      variant: 'outline' as const,
      accent: false,
    },
  ];

  return (
    <Section
      title={t('finalTitle')}
      intro={t('finalSubtitle')}
      className="bg-surface"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <Card
            key={card.title}
            className={card.accent ? 'border-primary border-2' : undefined}
          >
            <h3 className="font-display text-primary text-xl">{card.title}</h3>
            <p className="text-muted text-sm">{card.body}</p>
            <div className="mt-auto pt-4">
              <Button href={card.href} variant={card.variant}>
                {card.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
