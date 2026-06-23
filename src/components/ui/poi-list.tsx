import type { Poi } from '@/types/neighborhood';

type Props = {
  pois: Poi[];
};

// Liste numérotée de points d'intérêt (carte Quartier + carte business Espace Pro).
export function PoiList({ pois }: Props) {
  return (
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
  );
}
