import Image from 'next/image';

type PhotoProps = {
  /** Chemin public, ex. "/photos/BRH_148.webp" (voir config/photos). */
  src: string;
  /** Texte alternatif descriptif (accessibilité + SEO). */
  alt: string;
  /** Ratio d'aspect inline, ex. "16/9", "4/5", "4/3". */
  ratio?: string;
  /** Ratio responsive via classes Tailwind (prioritaire sur `ratio`). */
  ratioClass?: string;
  className?: string;
  /** true pour l'image LCP (hero) — désactive le lazy-loading. */
  priority?: boolean;
  /** Indice de tailles pour l'optimisation next/image. */
  sizes?: string;
};

// Photo optimisée (next/image) dans un cadre au ratio voulu : remplissage +
// object-cover. Même API de ratio que <PhotoPlaceholder> pour un remplacement direct.
export function Photo({
  src,
  alt,
  ratio = '4/3',
  ratioClass,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: PhotoProps) {
  return (
    <div
      style={ratioClass ? undefined : { aspectRatio: ratio }}
      className={`bg-surface relative overflow-hidden rounded-lg ${ratioClass ?? ''} ${className ?? ''}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
