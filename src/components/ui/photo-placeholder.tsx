type PhotoPlaceholderProps = {
  /** Ratio d'aspect, ex. "16/9", "4/5", "4/3". */
  ratio?: string;
  /** Légende affichée dans le cadre (emplacement attendu). */
  label?: string;
  className?: string;
};

// Placeholder photo provisoire (le pipeline photo est en cours).
// À remplacer par <Image> next/image quand les visuels sont prêts.
export function PhotoPlaceholder({
  ratio = '4/3',
  label = 'Photo à venir',
  className,
}: PhotoPlaceholderProps) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`border-line-strong bg-surface flex items-center justify-center rounded-lg border border-dashed text-center ${className ?? ''}`}
    >
      <span className="text-muted px-4 font-mono text-xs tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
