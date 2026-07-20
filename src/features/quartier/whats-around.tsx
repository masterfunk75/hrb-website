import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { QuartierMap } from '@/features/quartier/quartier-map';
import { BOOKING_HREF } from '@/config/site';

// Section « La carte du quartier » — composant signature repris de la maquette V2 :
// carte interactive (marqueurs + tooltips), liste filtrable par catégorie,
// survol/clic synchronisés entre marqueurs et entrées. Cible de l'ancre #autour.
export function WhatsAround() {
  const t = useTranslations('Neighborhood');
  const tNav = useTranslations('Nav');

  return (
    <Section
      id="autour"
      eyebrow={t('aroundEyebrow')}
      title={t('aroundTitle')}
      intro={t('aroundIntro')}
      className="scroll-mt-20"
    >
      <QuartierMap
        allLabel={t('mapAll')}
        filtersLabel={t('mapFiltersLabel')}
        mapAlt={t('mapPhoto')}
      />

      <div className="mt-10">
        <Button href={BOOKING_HREF}>{tNav('book')}</Button>
      </div>
    </Section>
  );
}
