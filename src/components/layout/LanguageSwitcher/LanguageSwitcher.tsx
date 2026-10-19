'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import styles from './LanguageSwitcher.module.scss';
import { Chevron } from './chevron';

const LABELS: Record<string, string> = {
  ru: 'RU',
  ky: 'KG',
  en: 'EN',
};

export const LanguageSwitcher = () => {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentLabel = LABELS[locale] ?? locale.toUpperCase();

  const changeLanguage = (lang: string) => {
    setOpen(false);
    if (lang !== locale) router.replace(pathname, { locale: lang });
  };

  return (
    <div
      className={styles.switcher}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-label={`${t('language')}: ${currentLabel}`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {currentLabel}
        <Chevron className={clsx(styles.chevron, open && styles.chevronOpen)} />
      </button>

      {open && (
        <ul className={styles.menu}>
          {routing.locales.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                aria-current={lang === locale}
                className={clsx(styles.item, lang === locale && styles.active)}
                onClick={() => changeLanguage(lang)}
              >
                {LABELS[lang] ?? lang.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
