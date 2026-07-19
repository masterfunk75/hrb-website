import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { getRoomRecommendations } from '@/content/rooms-extras';
import { PHONE } from '@/config/site';

type Props = {
  locale: string;
};

// §7 — « Pour qui ? » : 5 cards de recommandation (aide au choix).
export function RoomsRecommendations({ locale }: Props) {
  const t = useTranslations('Rooms');
  const recommendations = getRoomRecommendations(locale);

  return (
    <Section
      eyebrow={t('recoEyebrow')}
      title={t('recoTitle')}
      intro={t('recoIntro')}
      className="bg-surface"
    >
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((reco) => (
          <StaggerItem key={reco.id} className="h-full">
            <Card className="h-full">
              <h3 className="font-display text-primary text-lg">
                {reco.title}
              </h3>
              <dl className="mt-1 flex flex-col gap-3 text-sm">
                {reco.lines.map((line) => (
                  <div key={line.label}>
                    <dt className="text-muted text-xs tracking-wide uppercase">
                      {line.label}
                    </dt>
                    <dd className="text-ink">{line.value}</dd>
                  </div>
                ))}
              </dl>
              {reco.contactNote && (
                <p className="text-muted mt-auto pt-3 text-sm">
                  {reco.contactNote}{' '}
                  <a
                    href={PHONE.href}
                    className="text-accent hover:text-primary font-medium"
                  >
                    {PHONE.display}
                  </a>
                </p>
              )}
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
