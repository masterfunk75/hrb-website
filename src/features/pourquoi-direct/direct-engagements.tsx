import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { getEngagements } from '@/content/direct';

type Props = {
  locale: string;
};

// §3 — Trois engagements concrets (layout asymétrique : photo 4:5 + cards).
export function DirectEngagements({ locale }: Props) {
  const t = useTranslations('Direct');
  const engagements = getEngagements(locale);

  return (
    <Section
      eyebrow={t('engagementsEyebrow')}
      title={t('engagementsTitle')}
      intro={t('engagementsIntro')}
    >
      <div className="grid items-start gap-8 lg:grid-cols-[2fr_3fr]">
        <PhotoPlaceholder ratio="4/5" label={t('engagementsPhoto')} />
        <div className="flex flex-col gap-4">
          {engagements.map((engagement) => (
            <Card key={engagement.id}>
              <h3 className="font-display text-primary text-xl">
                {engagement.title}
              </h3>
              <p className="text-muted text-sm">{engagement.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
