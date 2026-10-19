  'use client';

import { useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import { DirectionCard } from './DirectionCard';
import { getLocalizedDirections } from './directions.data';

import 'swiper/css';
import styles from './DirectionsSection.module.scss';

export const DirectionsSection = () => {
  const t = useTranslations('Directions');
  const swiperRef = useRef<SwiperType | null>(null);

  const items = useMemo(() => getLocalizedDirections(), []);

  return (
    <section className={clsx('section', styles.section)}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titles}>
            <span className={styles.badge}>{t('badge')}</span>
            <h2 className={styles.title}>{t('title')}</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>{t('subtitle')}</p>
            <div className={styles.controls}>
              <Link href="/directions" className={styles.allLink}>
                {t('allDirections')}
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </Link>
              
              <div className={styles.arrows}>
                <button 
                  onClick={() => swiperRef.current?.slidePrev()}
                  className={clsx(styles.arrowBtn, styles.left)} 
                  aria-label="Previous slide"
                >
                  <Image
                    src="/icons/chevron.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
                <button 
                  onClick={() => swiperRef.current?.slideNext()}
                  className={styles.arrowBtn} 
                  aria-label="Next slide"
                >
                  <Image
                    src="/icons/chevron.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Keyboard]}
          spaceBetween={30}
          slidesPerView={1}
          keyboard={{ enabled: true }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.slider}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <DirectionCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}