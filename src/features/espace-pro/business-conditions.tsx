import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { getConditions } from '@/content/business';

type Props = {
  locale: string;
};

// §5 — Vos conditions : 2 blocs équivalents (sans chiffres ni %) + note de clôture.
export function BusinessConditions({ locale }: Props) {
  const t = useTranslations('Business');
  const conditions = getConditions(locale);

  return (
    <Section
      eyebrow={t('conditionsEyebrow')}
      title={t('conditionsTitle')}
      intro={t('conditionsIntro')}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {conditions.map((block) => (
          <Card key={block.id}>
            <h3 className="font-display text-primary text-xl">{block.title}</h3>
            <ul className="mt-2 flex flex-col gap-2 text-sm">
              {block.items.map((item) => (
                <li key={item} className="text-muted flex gap-2">
                  <span className="text-accent shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <p className="text-muted mt-8 max-w-2xl text-sm italic">
        {t('conditionsNote')}
      </p>
    </Section>
  );
}
