import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/navigation';
import { NAV_ITEMS } from './nav-items';
import { SOCIAL_ITEMS } from './social-items';
import styles from './Footer.module.scss';

export function Footer() {
  const tFooter = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.svg" alt={tFooter('logoAlt')} width={330} height={84} />
          </Link>
          <p className={styles.slogan}>{tFooter('slogan')}</p>
        </div>

        <nav className={styles.nav} aria-label={tFooter('navLabel')}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.key} href={item.href} className={styles.navLink}>
              {tFooter(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className={styles.side}>
          <div className={styles.social}>
            {SOCIAL_ITEMS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className={styles.copy}>{tFooter('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
