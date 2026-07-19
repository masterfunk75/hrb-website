import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { getAddresses } from '@/content/neighborhood';

type Props = {
  locale: string;
};

// Section « Quelques adresses qu'on aime » : 5 cards (placeholder 4:3 par card).
// Noms et adresses exacts en attente → libellés « pending » partagés.
export function Addresses({ locale }: Props) {
  const t = useTranslations('Neighborhood');
  const addresses = getAddresses(locale);

  return (
    <Section
      eyebrow={t('addressesEyebrow')}
      title={t('addressesTitle')}
      intro={t('addressesIntro')}
    >
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {addresses.map((address) => (
          <StaggerItem key={address.id} className="h-full">
            <Card className="h-full gap-0 overflow-hidden p-0">
              <PhotoPlaceholder
                ratio="4/3"
                label={address.photoLabel}
                className="rounded-none border-0"
              />
              <div className="flex flex-col gap-2 p-5">
                <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
                  {address.category}
                </span>
                <h3 className="font-display text-primary text-lg">
                  {t('addressNamePending')}
                </h3>
                <p className="text-muted text-sm">{address.pitch}</p>
                <p className="text-muted/70 mt-1 text-xs italic">
                  {t('addressStreetPending')}
                </p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <p className="text-muted mt-10 max-w-2xl text-sm italic">
        {t('addressesNote')}
      </p>
    </Section>
  );
}
