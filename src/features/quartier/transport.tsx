import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { getTransportModes } from '@/content/neighborhood';

type Props = {
  locale: string;
};

// Section « Accès et transports » : 7 modes (métro, RER, aéroports, gares,
// voiture, véhicule électrique, vélo) en cards data-driven.
export function Transport({ locale }: Props) {
  const t = useTranslations('Neighborhood');
  const modes = getTransportModes(locale);

  return (
    <Section
      eyebrow={t('transportEyebrow')}
      title={t('transportTitle')}
      className="bg-surface"
    >
      <Stagger className="grid gap-6 md:grid-cols-2">
        {modes.map((mode) => (
          <StaggerItem key={mode.id} className="h-full">
            <Card className="h-full">
              <h3 className="font-display text-primary text-xl">
                {mode.title}
              </h3>
              <p className="text-muted text-sm">{mode.lead}</p>
              {mode.details.length > 0 && (
                <ul className="mt-1 flex flex-col gap-1.5 text-sm">
                  {mode.details.map((detail) => (
                    <li key={detail} className="text-muted">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
