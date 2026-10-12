import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import '@/styles/index.scss';

// Основной шрифт сайта. cyrillic-ext нужен для кыргызских букв ң, ө, ү
const fontMain = Inter({
  variable: '--font-main',
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  display: 'swap',
});

// Адрес сайта — замените на свой домен
const SITE_URL = 'https://example.kg';

// Заранее собираем страницы для всех языков
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Заголовок и описание страницы на каждом языке (из lang/*.json → "Meta")
export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale,
      type: 'website',
      // images: ['/images/common/og-image.jpg'],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className={fontMain.variable}>
      <body>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
