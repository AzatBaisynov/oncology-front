import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Hero.module.scss';
import { heroCards } from './hero.data';


export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.dots} aria-hidden="true" />

      <svg className={styles.clipDefs} aria-hidden="true" focusable="false">
        <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
          <path d="M0.14,0 C0.05,0 0,0.12 0,0.27 C0,0.55 0.28,0.92 0.62,1 L1,1 L1,0 Z" />
        </clipPath>
      </svg>

      <div className={styles.media}>
        <Image
        // ссылка на фото пока что заглушка просто
          src="https://picsum.photos/id/1067/1920/1200"
          alt={t('imageAlt')}
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 60vw"
          className={styles.image}
        />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t('eyebrow')}</p>
          <h1 className={styles.title}>
            {t.rich('title', { accent: (chunks) => <em>{chunks}</em> })}
          </h1>
          <p className={styles.text}>{t.rich('text', { br: () => <br /> })}</p>
        </div>

        <ul className={styles.cards}>
          {heroCards.map(({ key, path }) => (
            <li key={key} className={styles.card}>
              <span className={styles.icon}>
                <Image src={path} alt="" width={44} height={44} />
              </span>
              <div>
                <h3 className={styles.cardTitle}>{t(`cards.${key}.title`)}</h3>
                <p className={styles.cardText}>{t(`cards.${key}.text`)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}