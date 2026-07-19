import { Photo } from './photo';

type Props = {
  /** Chemin de la photo (voir config/photos). */
  src: string;
  /** Texte alternatif. */
  alt: string;
  /** Ratio paysage, défaut 3:1. */
  ratio?: string;
};

// Bandeau photo pleine largeur (respiration entre deux sections) — sans coins
// arrondis, sur toute la largeur.
export function PhotoBand({ src, alt, ratio = '3/1' }: Props) {
  return (
    <section>
      <Photo
        src={src}
        alt={alt}
        ratio={ratio}
        sizes="100vw"
        className="rounded-none"
      />
    </section>
  );
}
