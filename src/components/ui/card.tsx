import type { ComponentProps } from 'react';

// Carte de base : bord, fond, padding. La couleur de fond peut être surchargée
// via className selon le fond de la section.
export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`border-line bg-canvas flex flex-col gap-3 rounded-lg border p-6 ${className ?? ''}`}
      {...props}
    />
  );
}
