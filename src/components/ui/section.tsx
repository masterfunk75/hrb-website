import type { ReactNode } from 'react';
import { Container } from './container';

type SectionProps = {
  /** Ancre HTML (ex. "pour-qui"). */
  id?: string;
  /** Petit label au-dessus du titre (small caps, accent). */
  eyebrow?: string;
  /** Titre de section (H2). */
  title?: string;
  children: ReactNode;
  /** Classes sur le <section> (ex. "bg-surface"). */
  className?: string;
};

// Conteneur de section standard : espacement vertical + Container + en-tête optionnel.
export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className ?? ''}`}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-primary mt-3 text-3xl font-normal sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
