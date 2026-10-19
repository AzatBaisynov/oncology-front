'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import styles from './NewsSection.module.scss';
import { NewsSectionProps } from './NewsSection.types';

export const NewsSection = ({ newsList = [] }: NewsSectionProps) => {
  const t = useTranslations('News');
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <div>
          <p className={styles.subtitle}>{t('badge')}</p>
          <h2 className={styles.title}>{t('title')}</h2>
        </div>

        <div className={styles.navigationButtons}>
          <button
            className={clsx(styles.navBtn, styles.prevBtn)}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <Image src="/icons/chevron.svg" alt="Prev" width={18} height={18} />
          </button>
          <button
            className={clsx(styles.navBtn, styles.nextBtn)}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <Image src="/icons/chevron.svg" alt="Next" width={18} height={18} />
          </button>
        </div>
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 12 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className={styles.swiper}
        >
          {newsList.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={`/news/${item.id}`} className={styles.cardLink}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={item.image} alt={item.title} className={styles.image} />
                  </div>
                  <div className={styles.info}>
                    <span className={styles.date}>{item.date}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
