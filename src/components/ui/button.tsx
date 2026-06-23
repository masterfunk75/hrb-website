import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { isPlainAnchorHref } from '@/lib/href';

type Variant = 'primary' | 'outline' | 'light' | 'outlineLight';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-on-emphasis hover:bg-primary-hover',
  outline:
    'border border-line-strong text-ink hover:border-primary hover:text-primary',
  light: 'bg-canvas text-primary hover:bg-surface',
  outlineLight:
    'border border-on-emphasis/40 text-on-emphasis hover:bg-on-emphasis/10',
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

// CTA stylé. href interne → Link next-intl (localisé /fr, /en) ;
// href tel:/mailto:/http/#ancre → <a> simple (liens externes ou ancres in-page,
// non localisés — un Link next-intl préfixerait à tort une ancre seule par /fr).
export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className ?? ''}`;

  if (isPlainAnchorHref(href)) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
