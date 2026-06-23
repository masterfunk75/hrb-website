import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { getStayTypes } from '@/content/business';

type Props = {
  locale: string;
};

// §4 — Deux types de séjour (mission courte / séjour long), photo 3:4 par card.
export function BusinessStayTypes({ locale }: Props) {
  const t = useTranslations('Business');
  const stayTypes = getStayTypes(locale);

  return (
    <Section
      eyebrow={t('stayEyebrow')}
      title={t('stayTitle')}
      className="bg-surface"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {stayTypes.map((stay) => (
          <Card key={stay.num} className="gap-0 overflow-hidden p-0">
            <PhotoPlaceholder
              ratio="3/4"
              label={stay.photoLabel}
              className="rounded-none border-0"
            />
            <div className="flex flex-col gap-2 p-6">
              <span className="font-display text-accent text-3xl">
                {stay.num}
              </span>
              <h3 className="font-display text-primary text-xl">
                {stay.title}
              </h3>
              <p className="text-ink text-sm font-medium">{stay.subtitle}</p>
              <p className="text-muted mt-1 text-sm">{stay.body}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
