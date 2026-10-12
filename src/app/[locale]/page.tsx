import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero/Hero';
import { About } from '@/components/sections/About/About';
import { Contacts } from '@/components/sections/Contacts/Contacts';

// Лендинг: секции выводятся сверху вниз в этом порядке.
// Новая секция: создать в components/sections/, добавить тексты в lang/*.json, подключить здесь.
export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Contacts />
    </>
  );
}
