import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About/About';
import { DirectionsSection } from '@/components/sections/Directions';

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
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
