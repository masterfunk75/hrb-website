import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';

type Variant = 'primary' | 'outline' | 'light';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-on-emphasis hover:bg-primary-hover',
  outline:
    'border border-line-strong text-ink hover:border-primary hover:text-primary',
  light: 'bg-canvas text-primary hover:bg-surface',
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

// CTA stylé. href interne → Link next-intl (localisé /fr, /en) ;
// href tel:/mailto:/http → <a> simple (liens externes non localisés).
export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className ?? ''}`;

  if (/^(tel:|mailto:|https?:)/.test(href)) {
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
