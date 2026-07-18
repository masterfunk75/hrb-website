'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
  children: ReactNode;
  /** Délai (s) pour échelonner plusieurs Reveal successifs (stagger). */
  delay?: number;
  className?: string;
};

// Tokens de mouvement partagés (cohérence globale — même rythme partout).
// ease-out « expo » pour une entrée douce ; sortie plus courte gérée ailleurs.
const DURATION = 0.4;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const OFFSET_Y = 24;

// Révélation au scroll : fondu + légère montée, une seule fois.
// Respecte prefers-reduced-motion (aucune transformation si l'utilisateur
// préfère moins d'animation — le contenu apparaît directement).
// Client Component : enveloppe des enfants rendus côté serveur sans les client-iser.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: OFFSET_Y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: DURATION, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}
