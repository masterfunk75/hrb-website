'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

// Bascule FR/EN en conservant la page courante.
// (Composant temporaire ici ; sera déplacé dans components/layout/ avec le vrai Header.)
export function LocaleSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <nav className="border-line-strong mt-2 flex items-center gap-1 rounded-full border p-1">
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            aria-current={isActive ? 'true' : undefined}
            className={
              isActive
                ? 'bg-primary text-on-emphasis rounded-full px-3 py-1 text-sm font-medium'
                : 'text-muted hover:text-primary rounded-full px-3 py-1 text-sm font-medium transition-colors'
            }
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
