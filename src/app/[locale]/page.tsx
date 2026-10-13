import { setRequestLocale } from 'next-intl/server';
import About from '@/components/sections/About/About';


// Лендинг: секции выводятся сверху вниз в этом порядке.
// Новая секция: создать в components/sections/, добавить тексты в lang/*.json, подключить здесь.
export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <About />
    </>
  );
}
