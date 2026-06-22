import { useTranslations } from 'next-intl';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';

// Bandeau photo pleine largeur (respiration entre « Ce qui se passe autour »
// et « Quelques adresses »). Photo différée → placeholder 3:1 full-bleed.
export function BreathingBand() {
  const t = useTranslations('Neighborhood');

  return (
    <section>
      <PhotoPlaceholder
        ratio="3/1"
        label={t('bandPhoto')}
        className="rounded-none border-x-0"
      />
    </section>
  );
}
