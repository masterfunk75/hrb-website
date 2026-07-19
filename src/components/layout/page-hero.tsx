import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';
import { Photo } from '@/components/ui/photo';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Chemin de la photo du hero (voir config/photos). */
  photoSrc: string;
  /** Texte alternatif de la photo. */
  photoAlt: string;
  photoRatio?: string;
  /** true si c'est l'image LCP de la page (désactive le lazy-loading). */
  photoPriority?: boolean;
  /** CTAs optionnels. */
  children?: ReactNode;
};

// Hero générique des pages internes (Chambres, Quartier, Espace Pro, Pourquoi direct).
export function PageHero({
  eyebrow,
  title,
  subtitle,
  photoSrc,
  photoAlt,
  photoRatio = '4/5',
  photoPriority = false,
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
        <Photo
          src={photoSrc}
          alt={photoAlt}
          ratio={photoRatio}
          priority={photoPriority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Container>
    </section>
  );
}
