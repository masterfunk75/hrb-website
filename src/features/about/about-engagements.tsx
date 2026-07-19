import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { getAboutEngagements } from '@/content/about';

type Props = {
  locale: string;
};

// §4 « Nos engagements » — 3 cards 01/02/03, la typo porte tout (pas d'icônes).
export function AboutEngagements({ locale }: Props) {
  const t = useTranslations('About');
  const engagements = getAboutEngagements(locale);

  return (
    <Section
      eyebrow={t('engagementsEyebrow')}
      title={t('engagementsTitle')}
      intro={t('engagementsIntro')}
      className="bg-surface"
    >
      <Stagger className="grid gap-6 md:grid-cols-3">
        {engagements.map((engagement) => (
          <StaggerItem key={engagement.num} className="h-full">
            <Card className="h-full">
              <span className="font-display text-accent text-4xl">
                {engagement.num}
              </span>
              <h3 className="font-display text-primary text-xl">
                {engagement.title}
              </h3>
              <p className="text-muted text-sm">{engagement.body}</p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
