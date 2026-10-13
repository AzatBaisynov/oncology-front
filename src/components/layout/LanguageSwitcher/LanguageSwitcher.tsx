'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={styles.switcher} ref={switcherRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {labels[locale] ?? locale.toUpperCase()}
        <span className={styles.chevron} aria-hidden="true" />
      </button>

      {isOpen && (
        <div className={styles.menu} role="listbox" aria-label="Language">
          {routing.locales.map((lang) => (
            <button
              key={lang}
              type="button"
              role="option"
              aria-selected={lang === locale}
              className={styles.option}
              onClick={() => {
                setIsOpen(false);
                if (lang !== locale) router.replace(pathname, { locale: lang });
              }}
            >
              {labels[lang] ?? lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
