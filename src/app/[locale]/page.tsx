import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero/Hero';
import { About } from '@/components/sections/About/About';
import { DirectionsSection } from '@/components/sections/Directions';

// Лендинг: секции выводятся сверху вниз в этом порядке.
// Новая секция: создать в components/sections/, добавить тексты в lang/*.json, подключить здесь.
const HomePage = async ({ params }: PageProps<'/[locale]'>) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <DirectionsSection />
    </>
  );
};

export default HomePage;
