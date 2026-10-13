import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './About.module.scss';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.wrapper}>
          
          <div className={styles.info}>
            <span className={styles.subtitle}>
              {t('subtitle')}
            </span>
            
            <h2 className={styles.title}>
              {t('title')}
            </h2>
            
            <p className={styles.description}>
              {t('text')}
            </p>
            
            <div className={styles.stats}>
              
              <div className={styles.statItem}>
                <span className={styles.statCaption}>
                  {t('stats.patients.caption')}
                </span>
                <strong className={styles.statValue}>
                  <span className={styles.statValueNumber}>{t('stats.patients.value')}</span>
                </strong>
                <span className={styles.statDesc}>
                  {t('stats.patients.desc')}
                </span>
              </div>
              
              <div className={styles.statItem}>
                <span className={styles.statCaption}>
                  {t('stats.doctors.caption')}
                </span>
                <strong className={styles.statValue}>
                  {t('stats.doctors.value')}
                </strong>
                <span className={styles.statDesc}>
                  {t('stats.doctors.desc')}
                </span>
              </div>
              
              <div className={styles.statItem}>
                <span className={styles.statCaption}>
                  {t('stats.equipment.caption')}
                </span>
                <strong className={`${styles.statValue} ${styles.statValueAccent}`}>
                  {t('stats.equipment.value')}
                </strong>
                <span className={styles.statDesc}>
                  {t('stats.equipment.desc')}
                </span>
              </div>

            </div>

            <Button href="/about" className={styles.btn}>
              {t('button')}
              <ArrowRight className={styles.btnIcon} size={16} strokeWidth={2} />
            </Button>

          </div>

          <div className={styles.imageContainer}>
            <Image 
              src="/images/about/building.jpg" 
              alt={t('imageAlt')} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
              className={styles.img}
            />
          </div>

          <div className={styles.mission}>
            <span className={styles.quoteIcon}>
              “
            </span>

            <p className={styles.missionText}>
              {t('mission')}
            </p>

            <div className={styles.missionLine} />
          </div>

        </div>
      </div>
    </section>
  );
}
