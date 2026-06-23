import type { ReactNode } from 'react';
import { Container } from '@/components/ui/container';

type PageCtaProps = {
  title: string;
  subtitle: string;
  /** Les CTAs (Button…). */
  children: ReactNode;
  /** Note optionnelle sous les CTAs (ex. rappel téléphone). */
  note?: ReactNode;
};

// Bandeau de clôture générique (fond appuyé) — réutilisable sur les pages internes.
export function PageCta({ title, subtitle, children, note }: PageCtaProps) {
  return (
    <section className="border-line bg-emphasis text-on-emphasis border-t">
      <Container className="flex flex-col items-center gap-6 py-16 text-center md:py-24">
        <h2 className="font-display text-3xl font-normal sm:text-4xl">
          {title}
        </h2>
        <p className="text-on-emphasis/80 max-w-xl">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3">{children}</div>
        {note && <p className="text-on-emphasis/70 max-w-xl text-sm">{note}</p>}
      </Container>
    </section>
  );
}
