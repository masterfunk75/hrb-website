import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
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
        {/* Cards empilées : cascade au scroll (la photo reste fixe). */}
        <Stagger className="flex flex-col gap-4">
          {engagements.map((engagement) => (
            <StaggerItem key={engagement.id}>
              <Card>
                <h3 className="font-display text-primary text-xl">
                  {engagement.title}
                </h3>
                <p className="text-muted text-sm">{engagement.body}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
