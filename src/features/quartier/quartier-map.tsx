'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { getQuartierMap } from '@/content/quartier-map';
import { QUARTIER_MAP_SRC } from '@/config/photos';
import type { MapCategoryId } from '@/types/quartier-map';

// Position des marqueurs sur l'illustration (en %, calibrées sur la maquette V2).
const POSITIONS: Record<string, { left: string; top: string }> = {
  longchamp: { left: '28%', top: '13%' },
  'roland-garros': { left: '33%', top: '51%' },
  'parc-princes': { left: '32%', top: '62%' },
  metro: { left: '22%', top: '89%' },
  'paris-expo': { left: '80%', top: '86%' },
};

type Filter = MapCategoryId | 'all';

type Props = {
  /** Libellé du filtre « Tous ». */
  allLabel: string;
  /** aria-label du groupe de filtres. */
  filtersLabel: string;
  /** Texte alternatif de la carte. */
  mapAlt: string;
};

// Carte interactive du quartier : marqueurs sur l'illustration + liste filtrable.
// Survol d'un marqueur ↔ mise en avant de l'entrée de liste (et inversement) ;
// clic sur un marqueur = flash de l'entrée. Filtres par catégorie.
export function QuartierMap({ allLabel, filtersLabel, mapAlt }: Props) {
  const locale = useLocale();
  const { pois, categories } = getQuartierMap(locale);

  const [filter, setFilter] = useState<Filter>('all');
  const [hovered, setHovered] = useState<string | null>(null);
  const [flashed, setFlashed] = useState<string | null>(null);

  const clearHover = useCallback((key: string) => {
    setHovered((h) => (h === key ? null : h));
  }, []);

  // Relance l'animation de flash sur l'entrée liée à un marqueur (clic).
  const flash = useCallback((key: string) => {
    setFlashed(null);
    requestAnimationFrame(() => setFlashed(key));
    window.setTimeout(() => setFlashed((f) => (f === key ? null : f)), 2000);
  }, []);

  const chips: { id: Filter; label: string }[] = [
    { id: 'all', label: allLabel },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ];
  const visible =
    filter === 'all' ? categories : categories.filter((c) => c.id === filter);

  return (
    <div className="quartier-grid">
      <figure className="quartier-map-figure">
        <Image
          src={QUARTIER_MAP_SRC}
          alt={mapAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        {pois.map((poi) => {
          const pos = POSITIONS[poi.key];
          if (!pos) return null;
          return (
            <button
              key={poi.key}
              type="button"
              className={hovered === poi.key ? 'poi is-active' : 'poi'}
              style={{ left: pos.left, top: pos.top }}
              aria-label={poi.label}
              onMouseEnter={() => setHovered(poi.key)}
              onMouseLeave={() => clearHover(poi.key)}
              onFocus={() => setHovered(poi.key)}
              onBlur={() => clearHover(poi.key)}
              onClick={() => flash(poi.key)}
            >
              <span className="poi__tip">{poi.label}</span>
            </button>
          );
        })}
      </figure>

      <div className="quartier-list">
        <div
          className="quartier-filters"
          role="tablist"
          aria-label={filtersLabel}
        >
          {chips.map((chip) => (
            <button
              key={chip.id}
              type="button"
              role="tab"
              aria-selected={filter === chip.id}
              className={
                filter === chip.id ? 'quartier-chip is-active' : 'quartier-chip'
              }
              onClick={() => setFilter(chip.id)}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {visible.map((cat) => (
          <div key={cat.id}>
            <span className="quartier-cat-eyebrow">{cat.label}</span>
            <ul className="quartier-items">
              {cat.items.map((item) => {
                const mappable = Boolean(item.poi);
                const classes = [
                  mappable ? 'is-mappable' : '',
                  mappable && hovered === item.poi ? 'is-hover' : '',
                  mappable && flashed === item.poi ? 'is-flash' : '',
                ]
                  .filter(Boolean)
                  .join(' ');
                return (
                  <li
                    key={item.name}
                    className={classes || undefined}
                    onMouseEnter={
                      mappable ? () => setHovered(item.poi!) : undefined
                    }
                    onMouseLeave={
                      mappable ? () => clearHover(item.poi!) : undefined
                    }
                    onClick={mappable ? () => flash(item.poi!) : undefined}
                  >
                    <span className="quartier-items__name">{item.name}</span>
                    <span className="quartier-items__dist">{item.dist}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
