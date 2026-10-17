import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { HeaderMenu } from './HeaderMenu';
import { NAV } from './constants';
import styles from './Header.module.scss';

export const Header = () => {
  const t = useTranslations('Header');
  const items = NAV.map(({ href, key }) => ({ href, label: t(key) }));

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/HeaderLogo.svg"
            alt={t('logoAlt')}
            width={330}
            height={84}
            priority
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.nav} aria-label={t('nav')}>
          {items.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.aside}>
          <button type="button" className={styles.search} aria-label={t('search')}>
            <Image src="/icons/iconsearch.svg" alt="" width={22} height={22} unoptimized />
          </button>
          <LanguageSwitcher />
          <HeaderMenu items={items} label={t('menu')} closeLabel={t('closeMenu')} />
        </div>
      </div>
    </header>
  );
}
