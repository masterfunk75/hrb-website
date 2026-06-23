import { PhotoPlaceholder } from './photo-placeholder';

type Props = {
  label: string;
  /** Ratio paysage, défaut 3:1. */
  ratio?: string;
};

// Bandeau photo pleine largeur (respiration entre deux sections). Photo différée
// → PhotoPlaceholder full-bleed (sans coins arrondis ni bords latéraux).
export function PhotoBand({ label, ratio = '3/1' }: Props) {
  return (
    <section>
      <PhotoPlaceholder
        ratio={ratio}
        label={label}
        className="rounded-none border-x-0"
      />
    </section>
  );
}
