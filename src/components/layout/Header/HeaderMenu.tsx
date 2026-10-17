'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Link } from '@/i18n/navigation';
import styles from './HeaderMenu.module.scss';

type Props = {
  items: { href: string; label: string }[];
  label: string;
  closeLabel: string;
};


export const HeaderMenu = ({ items, label, closeLabel }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrap} onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
      <button
        type="button"
        className={styles.burger}
        aria-expanded={open}
        aria-label={open ? closeLabel : label}
        onClick={() => setOpen(!open)}
      >
        <span className={clsx(styles.bar, open && styles.barOpen)} />
      </button>

      <nav className={clsx(styles.panel, open && styles.panelOpen)} aria-label={label}>
        {items.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
