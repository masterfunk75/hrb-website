import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PHONE } from '@/config/site';

// §10 — CTA final : 3 portes équivalentes (devis / appel / visite).
export function BusinessFinalCta() {
  const t = useTranslations('Business');

  const cards = [
    {
      title: t('finalDevisTitle'),
      body: t('finalDevisBody'),
      cta: t('finalDevisCta'),
      href: '#devis',
      variant: 'primary' as const,
    },
    {
      title: t('finalCallTitle'),
      body: t('finalCallBody'),
      cta: PHONE.display,
      href: PHONE.href,
      variant: 'outline' as const,
    },
    {
      title: t('finalVisitTitle'),
      body: t('finalVisitBody'),
      cta: t('finalVisitCta'),
      href: '#devis',
      variant: 'outline' as const,
    },
  ];

  return (
    <Section
      eyebrow={t('finalEyebrow')}
      title={t('finalTitle')}
      intro={t('finalSubtitle')}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title}>
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
