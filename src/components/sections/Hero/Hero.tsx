import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button/Button';
import styles from './Hero.module.scss';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section id="hero" className={`section ${styles.hero}`}>
      <div className="container">
        <h1 className={styles.title}>{t('title')}</h1>
        <p className="subtitle">{t('subtitle')}</p>
        <Button href="#about" className={styles.button}>
          {t('button')}
        </Button>
      </div>
    </section>
  );
};
