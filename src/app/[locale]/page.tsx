import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About/About';
import { DirectionsSection } from '@/components/sections/Directions';
import { LocationSection } from '@/components/sections/Location';

const HomePage = async ({ params }: PageProps<'/[locale]'>) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <DirectionsSection />
      <LocationSection />
    </>
  );
};

export default HomePage;