import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Wrappers légers autour des API de navigation de Next.js qui tiennent
// compte de la configuration de routing (préfixe de langue /fr, /en).
// À utiliser PARTOUT à la place de `next/link` et `next/navigation`.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
