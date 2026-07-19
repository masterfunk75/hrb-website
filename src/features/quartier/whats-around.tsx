import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { PoiList } from '@/components/ui/poi-list';
import { Stagger, StaggerItem } from '@/components/motion/stagger';
import { getPois, getEventCategories } from '@/content/neighborhood';
import { BOOKING_HREF } from '@/config/site';

type Props = {
  locale: string;
};

// Section « Ce qui se passe autour » : carte + 12 POI, puis 4 catégories d'événements.
// Cible de l'ancre #autour (CTA du hero). La carte SVG interactive est différée :
// placeholder + liste data-driven des lieux pour l'instant.
export function WhatsAround({ locale }: Props) {
  const t = useTranslations('Neighborhood');
  const tNav = useTranslations('Nav');
  const pois = getPois(locale);
  const categories = getEventCategories(locale);

  return (
    <Section
      id="autour"
      eyebrow={t('aroundEyebrow')}
      title={t('aroundTitle')}
      intro={t('aroundIntro')}
      className="scroll-mt-20"
    >
      {/* Carte (placeholder) + liste numérotée des 12 lieux */}
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <PhotoPlaceholder ratio="4/3" label={t('mapPhoto')} />
          <p className="text-muted mt-2 text-sm">{t('mapCaption')}</p>
        </div>
        <PoiList pois={pois} />
      </div>

      {/* 4 catégories d'événements (cards texte) — apparition en cascade */}
      <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <StaggerItem key={cat.id} className="h-full">
            <Card className="h-full">
              <h3 className="font-display text-primary text-xl">{cat.title}</h3>
              <p className="text-muted text-sm italic">{cat.intro}</p>
              <ul className="mt-2 flex flex-col gap-3 text-sm">
                {cat.venues.map((venue) => (
                  <li key={venue.name}>
                    <span className="text-ink font-medium">{venue.name}</span>
                    <span className="text-muted"> — {venue.description}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="mt-10">
        <Button href={BOOKING_HREF}>{tNav('book')}</Button>
      </div>
    </Section>
  );
}
