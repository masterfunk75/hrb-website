import type { ComponentProps } from 'react';

// Conteneur centré à largeur max — utilisé par toutes les sections.
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 ${className ?? ''}`}
      {...props}
    />
  );
}
