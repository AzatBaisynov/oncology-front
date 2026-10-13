import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Directions.module.css';

export default function Directions() {
  const t = useTranslations('Directions');

  const items = [
    { id: 'diagnostics', slug: 'diagnostics' },
    { id: 'surgery', slug: 'surgery' },
    { id: 'therapy', slug: 'therapy' }
  ];

  return (
    <section id="directions" className="section">
      <div className="container">
        
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.subtitle}>{t('subtitle')}</span>
            <h2 className={styles.title}>{t('title')}</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.description}>{t('description')}</p>
            <a href="#all" className={styles.allLink}>
              {t('allDirections')}
              <svg className={styles.arrowIcon} viewBox="0 0 16 16" fill="none" xmlns="http://w3.org">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                
              </div>
              
              <div className={styles.cardBody}>
                <div className={styles.cardContent}>
                  <strong className={styles.cardTitle}>
                    {t(`items.${item.slug}.title`)}
                  </strong>
                  <p className={styles.cardText}>
                    {t(`items.${item.slug}.text`)}
                  </p>
                </div>
                
                <a href={`/directions/${item.slug}`} className={styles.cardBtn} aria-label={t(`items.${item.slug}.title`)}>
                  <svg className={styles.cardBtnIcon} viewBox="0 0 16 16" fill="none" xmlns="http://w3.org">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
