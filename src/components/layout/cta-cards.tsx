import type { ReactNode } from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button, type ButtonVariant } from '@/components/ui/button';

// Une carte d'invitation : titre, corps, et un CTA (bouton) ancré en bas.
// `accent` met une carte en avant (bordure primaire) — ex. l'option « Réserver ».
export type CtaCard = {
  title: string;
  body: string;
  cta: string;
  href: string;
  variant: ButtonVariant;
  accent?: boolean;
};

type CtaCardsProps = {
  cards: CtaCard[];
  /** Petit label au-dessus du titre (small caps, accent). */
  eyebrow?: string;
  /** Titre de section (H2). */
  title?: string;
  /** Intro / sous-titre sous le titre. */
  intro?: ReactNode;
  /** Classes sur le <section> (ex. "bg-surface"). */
  className?: string;
};

// Bloc « CTA final » : une grille de cartes d'invitation (md:grid-cols-3),
// chacune avec un bouton ancré en bas. Factorisé depuis les pages À propos et
// Espace pro qui partageaient un markup identique (#17).
export function CtaCards({
  cards,
  eyebrow,
  title,
  intro,
  className,
}: CtaCardsProps) {
  return (
    <Section
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      className={className}
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
