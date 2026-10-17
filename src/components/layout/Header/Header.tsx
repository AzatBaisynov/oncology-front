import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Header.module.scss';

export const Header = () => {
  const t = useTranslations('Header');

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          LOGO
        </Link>

        <nav className={styles.nav}>
          <a href="#about">{t('about')}</a>
          <a href="#contacts">{t('contacts')}</a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
};
