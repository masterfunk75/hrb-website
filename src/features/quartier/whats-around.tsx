import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { getPois, getEventCategories } from '@/content/neighborhood';

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
    <section id="autour" className="bg-surface scroll-mt-20 py-16 md:py-24">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-accent font-mono text-xs tracking-[0.2em] uppercase">
            {t('aroundEyebrow')}
          </p>
          <h2 className="font-display text-primary mt-3 text-3xl font-normal sm:text-4xl">
            {t('aroundTitle')}
          </h2>
          <p className="text-muted mt-4 text-lg">{t('aroundIntro')}</p>
        </div>

        {/* Carte (placeholder) + liste numérotée des 12 lieux */}
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <PhotoPlaceholder ratio="4/3" label={t('mapPhoto')} />
            <p className="text-muted mt-2 text-sm">{t('mapCaption')}</p>
          </div>
          <ol className="grid gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {pois.map((poi) => (
              <li key={poi.num} className="flex items-baseline gap-3 text-sm">
                <span className="bg-primary text-on-emphasis flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs">
                  {poi.num}
                </span>
                <span>
                  <span className="text-ink font-medium">{poi.label}</span>
                  {poi.distance && (
                    <span className="text-muted"> · {poi.distance}</span>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* 4 catégories d'événements (cards texte) */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <Card key={cat.id}>
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
          ))}
        </div>

        <div className="mt-10">
          <Button href="/#booking">{tNav('book')}</Button>
        </div>
      </Container>
    </section>
  );
}
