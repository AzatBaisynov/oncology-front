'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './HeroAboutScene.module.scss';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  hero: ReactNode;
  about: ReactNode;
};

// Форма выреза из Hero.tsx, «выпрямленная» в прямоугольник.
// Количество чисел такое же, как в исходном пути, — поэтому GSAP может плавно перетекать одну в другую.
const CLIP_RECT = 'M0,0 C0,0 0,0 0,0.27 C0,0.55 0,1 0,1 L1,1 L1,0 Z';

// Анимация включается от 768px и только если в системе не выключено движение.
// Ниже 768 — обычная вёрстка без анимации.
const MOTION = '(min-width: 768px) and (prefers-reduced-motion: no-preference)';

export function HeroAboutScene({ hero, about }: Props) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scene = sceneRef.current!;
      const heroBox = heroRef.current!;
      const aboutBox = aboutRef.current!;

      const q = gsap.utils.selector(scene);
      const media = q<HTMLElement>('[data-hero-media]')[0];
      const clipPath = q('[data-hero-clip]')[0];
      const image = q('[data-hero-image]');
      const heroFade = q('[data-hero-content], [data-hero-dots]');
      const heroCards = q('[data-hero-cards]');
      const aboutSlot = q<HTMLElement>('[data-about-image]')[0];
      const aboutReveal = q('[data-about-info] > *, [data-about-reveal]');

      if (!media || !clipPath || !aboutSlot) return;

      // Высота sticky-хедера: секция закрепляется сразу под ним
      const headerOffset = () => {
        const header = document.querySelector('header');
        if (!header) return 0;
        const { position } = getComputedStyle(header);
        return position === 'sticky' || position === 'fixed' ? header.offsetHeight : 0;
      };

      // Помещается ли About в один экран поверх Hero.
      // Не помещается (например, телефон в горизонтальном положении) — анимацию не включаем.
      const aboutFits = () => {
        const had = scene.classList.contains(styles.layered);
        scene.classList.add(styles.layered);
        const fits = aboutBox.scrollHeight <= heroBox.offsetHeight;
        if (!had) scene.classList.remove(styles.layered);
        return fits;
      };

      const buildLanding = () => {
        scene.classList.add(styles.layered);

        // Где окно About относительно секции Hero — записываем в CSS-переменные фото
        const measureSlot = () => {
          const b = heroBox.getBoundingClientRect();
          const r = aboutSlot.getBoundingClientRect();
          const img = aboutSlot.querySelector('img');
          gsap.set(media, {
            '--slot-top': `${r.top - b.top}px`,
            '--slot-left': `${r.left - b.left}px`,
            '--slot-right': `${b.right - r.right}px`,
            '--slot-bottom': `${b.bottom - r.bottom}px`,
            '--slot-radius': getComputedStyle(aboutSlot).borderTopLeftRadius,
          });
          return img ? getComputedStyle(img).objectPosition : '50% 50%';
        };
        const slotObjectPosition = measureSlot();

        // «Родную» картинку About прячем — на её место прилетит фото Hero
        gsap.set(aboutSlot, { autoAlpha: 0 });

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: scene,
            start: () => `top top+=${headerOffset()}`,
            end: '+=220%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: measureSlot,
          },
        });

        // Фаза 1: фото раскрывается на весь экран, текст и карточки Hero уходят.
        // power2.in (разгон) + power2.out во второй фазе — одно движение без остановки на стыке
        tl.to(media, { '--expand': 1, duration: 1, ease: 'power2.in' }, 0)
          .to(clipPath, { attr: { d: CLIP_RECT }, duration: 1, ease: 'power2.in' }, 0)
          .to(heroFade, { x: -80, autoAlpha: 0, duration: 0.6 }, 0)
          .to(heroCards, { y: 60, autoAlpha: 0, duration: 0.4 }, 0)

          // Фаза 2: фото сжимается в окно About, тексты About появляются
          .to(media, { '--land': 1, duration: 1, ease: 'power2.out' })
          .to(image, { objectPosition: slotObjectPosition, duration: 1, ease: 'power2.out' }, '<')
          .set(aboutBox, { pointerEvents: 'auto' }, '-=0.45')
          .from(
            aboutReveal,
            { y: 40, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
            '-=0.45',
          )

          // Фото на месте и кадрировано так же — подменяем на «родную» картинку About
          .set(aboutSlot, { autoAlpha: 1 })
          .set(media, { autoAlpha: 0 });

        return () => scene.classList.remove(styles.layered);
      };

      // ---------- Включение и пересборка ----------
      let mm: gsap.MatchMedia | null = null;
      let enabled = false;

      const build = () => {
        enabled = aboutFits();
        mm = gsap.matchMedia();
        if (enabled) mm.add(MOTION, buildLanding);
      };

      build();

      // Влезает ли About, могло измениться (ресайз, догрузился шрифт) — пересобираем
      let alive = true;
      const recheck = () => {
        if (!alive) return;
        if (aboutFits() === enabled) return ScrollTrigger.refresh();
        mm?.revert();
        build();
      };

      let timer: ReturnType<typeof setTimeout>;
      const onResize = () => {
        clearTimeout(timer);
        timer = setTimeout(recheck, 200);
      };
      window.addEventListener('resize', onResize);
      document.fonts?.ready.then(recheck);

      return () => {
        alive = false;
        clearTimeout(timer);
        window.removeEventListener('resize', onResize);
        mm?.revert();
      };
    },
    { scope: sceneRef },
  );

  return (
    <div ref={sceneRef} className={styles.scene}>
      <div ref={heroRef} className={styles.hero}>
        {hero}
      </div>
      <div ref={aboutRef} className={styles.about}>
        {about}
      </div>
    </div>
  );
}