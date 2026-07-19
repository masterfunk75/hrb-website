import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Photo } from '@/components/ui/photo';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { getStayTypes } from '@/content/business';
import { photoSrc } from '@/config/photos';

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
      <Stagger className="grid gap-6 md:grid-cols-2">
        {stayTypes.map((stay) => (
          <StaggerItem key={stay.num} className="h-full">
            <Card className="h-full gap-0 overflow-hidden p-0">
              <Photo
                src={photoSrc(
                  stay.num === '01' ? 'proMissionCourte' : 'proSejourLong',
                )}
                alt={stay.title}
                ratio="3/4"
                className="rounded-none"
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
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
