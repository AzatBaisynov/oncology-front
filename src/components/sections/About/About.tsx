import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './About.module.scss';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.wrapper}>
          
          {/* Левая колонка: Текст, Счетчики и Кнопка */}
          <div className={styles.info}>
            <span className={styles.subtitle}>{t('subtitle')}</span>
            <h2 className={styles.title}>{t('title')}</h2>
            <p className={styles.text}>{t('text')}</p>
            
            {/* Блок преимуществ */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statCaption}>{t('stats.patients.caption')}</span>
                <strong className={styles.statValue}>{t('stats.patients.value')}</strong>
                <span className={styles.statDesc}>{t('stats.patients.desc')}</span>
              </div>
              
              <div className={styles.statItem}>
                <span className={styles.statCaption}>{t('stats.doctors.caption')}</span>
                <strong className={styles.statValue}>{t('stats.doctors.value')}</strong>
                <span className={styles.statDesc}>{t('stats.doctors.desc')}</span>
              </div>
              
              <div className={styles.statItem}>
                <span className={styles.statCaption}>{t('stats.equipment.caption')}</span>
                <strong className={`${styles.statValue} ${styles.statValueAccent}`}>
                  {t('stats.equipment.value')}
                </strong>
                <span className={styles.statDesc}>{t('stats.equipment.desc')}</span>
              </div>
            </div>
            
            {/* Кнопка */}
            <a href="#more" className={styles.btn}>
              {t('button')}
              <svg className={styles.btnIcon} viewBox="0 0 16 16" fill="none" xmlns="http://w3.org">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Центральная колонка: Фото здания клиники */}
          <div className={styles.imageBlock}>
            <Image 
              src="/images/about/building.jpg" 
              alt={t('imageAlt')} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
              className={styles.img}
            />
          </div>

          {/* Правая колонка: Выносная цитата-миссия */}
          <div className={styles.mission}>
            <span className={styles.quoteIcon}>“</span>
            <p className={styles.missionText}>{t('mission')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
