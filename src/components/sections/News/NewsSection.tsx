'use client';

import { useState, useRef } from 'react';
import styles from './NewsSection.module.scss';
import { NewsModal } from './NewsModal';

interface NewsItem {
  id: number;
  image: string;
  date: string;
  title: string;
}

export function NewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const freshNews = (newsData as NewsItem[]).slice(0, 6);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(`.${styles.card}`) as HTMLElement;
      if (firstCard) {
        const scrollAmount = firstCard.offsetWidth + 20;
        containerRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <div>
          <div className={styles.subtitle}>Новости</div>
          <h2 className={styles.title}>Актуальное</h2>
        </div>

        <button className={styles.allNewsBtn} onClick={() => setIsModalOpen(true)}>
          <span>Все новости</span> <span>→</span>
        </button>
      </div>

      <div className={styles.mainWrapper}>
        <div className={styles.cardsContainer} ref={containerRef}>
          {freshNews.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
              <div className={styles.info}>
                <span className={styles.date}>{item.date}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.navigationButtons}>
          <button className={styles.navBtn} onClick={() => scroll('left')} aria-label="Предыдущая">
            <img src="/icons/chevron-left.svg" alt="" />
          </button>
          <button className={styles.navBtn} onClick={() => scroll('right')} aria-label="Следующая">
            <img src="/icons/chevron-right.svg" alt="" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <NewsModal items={newsData as NewsItem[]} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}
