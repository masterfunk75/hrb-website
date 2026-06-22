import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  photoLabel: string;
  photoRatio?: string;
  /** CTAs optionnels. */
  children?: ReactNode;
};

// Hero générique des pages internes (Chambres, Quartier, Espace Pro, Pourquoi direct).
export function PageHero({
  eyebrow,
  title,
  subtitle,
  photoLabel,
  photoRatio = '4/5',
  children,
}: PageHeroProps) {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
            {eyebrow}
          </span>
          <h1 className="font-display text-primary text-4xl font-normal sm:text-5xl">
            {title}
          </h1>
          <p className="text-muted max-w-md text-lg">{subtitle}</p>
          {children ? (
            <div className="flex flex-wrap gap-3">{children}</div>
          ) : null}
        </div>
        <PhotoPlaceholder ratio={photoRatio} label={photoLabel} />
      </Container>
    </section>
  );
}
