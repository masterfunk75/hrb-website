'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Décalage entre chaque enfant (s). 0.06 ≈ 60 ms — rythme « premium » discret. */
  stagger?: number;
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

// Tokens de mouvement — alignés sur <Reveal> pour un rythme cohérent partout.
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const OFFSET_Y = 16;

// Le conteneur ne s'anime pas lui-même : il orchestre le séquençage des enfants.
const containerVariants = (stagger: number): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: OFFSET_Y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

// Apparition échelonnée (stagger) au scroll : chaque <StaggerItem> enfant entre
// à la suite, pour un effet de cascade plutôt qu'un bloc qui surgit d'un coup.
// Respecte prefers-reduced-motion : rendu statique, sans animation.
// Client Component qui enveloppe des enfants rendus côté serveur sans les client-iser.
export function Stagger({ children, className, stagger = 0.06 }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}

// Élément d'un <Stagger> : fondu + légère montée, séquencé par le parent
// (hérite de l'état d'animation du conteneur via les variants « hidden »/« show »).
export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
