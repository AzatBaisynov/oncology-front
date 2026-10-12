'use client';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import styles from './LanguageSwitcher.module.scss';

const labels: Record<string, string> = {
  ru: 'RU',
  ky: 'KG',
  en: 'EN',
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={styles.switcher}>
      {routing.locales.map((lang) => (
        <button
          key={lang}
          type="button"
          className={clsx(styles.item, lang === locale && styles.active)}
          onClick={() => router.replace(pathname, { locale: lang })}
          aria-current={lang === locale ? 'true' : undefined}
        >
          {labels[lang] ?? lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
