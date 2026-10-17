import { useTranslations } from 'next-intl';
import styles from './About.module.scss';

export const About = () => {
  const t = useTranslations('About');

  return (
    <section id="about" className=" section section--alt">
      <div className="container">
        <h2 className="title">{t('title')}</h2>
        <p className={styles.text}>{t('text')}</p>
      </div>
    </section>
  );
}
