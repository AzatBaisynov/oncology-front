import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './DirectionCard.module.scss';
import { DirectionItem } from './directions.types';

interface DirectionCardProps {
  item: DirectionItem;
}

export const DirectionCard = ({ item }: DirectionCardProps) => {
  const t = useTranslations('Directions');

  const href = item.link || `/directions/${item.id}`

  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={t(item.titleKey)}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{t(item.titleKey)}</h3>
          <p className={styles.description}>{t(item.descKey)}</p>
        </div>

        <div className={styles.arrowButton} aria-hidden="true">
          <Image
            src="/icons/arrow-right.svg"
            alt=""
            width={18}
            height={18}
            className={styles.arrowIcon}
          />
        </div>
      </div>
    </Link>
  );
}