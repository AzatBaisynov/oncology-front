import { useTranslations } from 'next-intl';
import styles from './Footer.module.scss';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>LOGO</span>
        <p>{t('rights')}</p>
      </div>
    </footer>
  );
}
