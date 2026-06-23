import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { getAdvantages } from '@/content/business';

type Props = {
  locale: string;
};

// §3 — Quatre avantages clés (grille 2×2).
export function BusinessAdvantages({ locale }: Props) {
  const t = useTranslations('Business');
  const advantages = getAdvantages(locale);

  return (
    <Section eyebrow={t('advantagesEyebrow')} title={t('advantagesTitle')}>
      <div className="grid gap-6 md:grid-cols-2">
        {advantages.map((advantage) => (
          <Card key={advantage.id}>
            <h3 className="font-display text-primary text-xl">
              {advantage.title}
            </h3>
            <p className="text-muted text-sm">{advantage.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
