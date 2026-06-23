import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder';
import { PoiList } from '@/components/ui/poi-list';
import { getBusinessPois } from '@/content/business';

type Props = {
  locale: string;
};

// §6 — Carte business : 10 pôles d'affaires. Carte SVG interactive différée
// (placeholder + liste numérotée pour l'instant).
export function BusinessMap({ locale }: Props) {
  const t = useTranslations('Business');
  const pois = getBusinessPois(locale);

  return (
    <Section
      eyebrow={t('mapEyebrow')}
      title={t('mapTitle')}
      intro={t('mapIntro')}
      className="bg-surface"
    >
      <div className="grid items-start gap-8 md:grid-cols-2">
        <PhotoPlaceholder ratio="4/3" label={t('mapPhoto')} />
        <PoiList pois={pois} />
      </div>
    </Section>
  );
}
