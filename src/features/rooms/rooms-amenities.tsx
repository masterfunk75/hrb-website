import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { getAmenityGroups } from '@/content/rooms-extras';

type Props = {
  locale: string;
};

// §6 — Équipements communs : 4 groupes en grille 2×2.
export function RoomsAmenities({ locale }: Props) {
  const t = useTranslations('Rooms');
  const groups = getAmenityGroups(locale);

  return (
    <Section eyebrow={t('amenitiesEyebrow')} title={t('amenitiesTitle')}>
      <Stagger className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <StaggerItem key={group.id} className="h-full">
            <Card className="h-full">
              <h3 className="font-display text-primary text-xl">
                {group.title}
              </h3>
              <ul className="mt-1 flex flex-col gap-2 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="text-muted flex gap-2">
                    <span className="text-accent shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
