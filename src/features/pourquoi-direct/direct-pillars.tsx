import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { getPillars } from '@/content/direct';

type Props = {
  locale: string;
};

// §2 — Trois piliers (prix / attention / flexibilité), chacun avec un mini-claim.
export function DirectPillars({ locale }: Props) {
  const t = useTranslations('Direct');
  const pillars = getPillars(locale);

  return (
    <Section
      eyebrow={t('pillarsEyebrow')}
      title={t('pillarsTitle')}
      className="bg-surface"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.id}>
            <h3 className="font-display text-primary text-xl">
              {pillar.title}
            </h3>
            <p className="text-muted text-sm">{pillar.body}</p>
            <p className="text-accent mt-auto pt-3 font-mono text-xs tracking-[0.15em] uppercase">
              {pillar.claim}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
