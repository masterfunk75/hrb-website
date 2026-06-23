import { useTranslations } from 'next-intl';
import { PhotoBand } from '@/components/ui/photo-band';

// Bandeau respiration de la page Quartier (entre « Ce qui se passe autour »
// et « Quelques adresses ») — délègue à la primitive partagée PhotoBand.
export function BreathingBand() {
  const t = useTranslations('Neighborhood');

  return <PhotoBand label={t('bandPhoto')} />;
}
