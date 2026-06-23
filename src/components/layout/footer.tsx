import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { mainNav, secondaryNav } from '@/config/navigation';
import { PHONE } from '@/config/site';

// Pied de page global du site (Server Component).
export function Footer() {
  const tNav = useTranslations('Nav');
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-line bg-emphasis text-on-emphasis border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-lg">Boulogne Résidence</p>
          <p className="text-on-emphasis/70 mt-2 text-sm">{t('tagline')}</p>
        </div>

        <nav className="flex flex-col gap-2" aria-label={t('navLabel')}>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-on-emphasis/80 hover:text-on-emphasis text-sm transition-colors"
            >
              {tNav(item.labelKey)}
            </Link>
          ))}
        </nav>

        <nav
          className="flex flex-col gap-2"
          aria-label={t('navSecondaryLabel')}
        >
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-on-emphasis/80 hover:text-on-emphasis text-sm transition-colors"
            >
              {tNav(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="text-on-emphasis/80 text-sm">
          <p>{t('address')}</p>
          <p className="mt-3">
            <a href={PHONE.href} className="hover:text-on-emphasis">
              {PHONE.display}
            </a>
          </p>
        </div>
      </div>

      <div className="border-on-emphasis/10 border-t">
        <div className="text-on-emphasis/60 mx-auto max-w-7xl px-6 py-4 text-xs">
          © {year} {t('rights')}
        </div>
      </div>
    </footer>
  );
}
