import type { ReactNode } from 'react';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button, type ButtonVariant } from '@/components/ui/button';
import { Stagger, StaggerItem } from '@/components/motion/stagger';

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
// Les cartes apparaissent en cascade au scroll ; pas de lift sur la carte
// (le bouton porte déjà l'affordance d'action — hover + press).
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
      <Stagger className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <StaggerItem key={card.title} className="h-full">
            <Card
              className={`h-full${card.accent ? 'border-primary border-2' : ''}`}
            >
              <h3 className="font-display text-primary text-xl">
                {card.title}
              </h3>
              <p className="text-muted text-sm">{card.body}</p>
              <div className="mt-auto pt-4">
                <Button href={card.href} variant={card.variant}>
                  {card.cta}
                </Button>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
