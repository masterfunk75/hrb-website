'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

// Bascule FR/EN en conservant la page courante.
export function LocaleSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();
  const t = useTranslations('Nav');

  return (
    <nav
      className="border-line-strong flex items-center gap-1 rounded-full border p-1"
      aria-label={t('languageLabel')}
    >
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
                ? 'bg-primary text-on-emphasis rounded-full px-2.5 py-1 text-xs font-medium'
                : 'text-muted hover:text-primary rounded-full px-2.5 py-1 text-xs font-medium transition-colors'
            }
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
