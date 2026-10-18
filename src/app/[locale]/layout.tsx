import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import '@/styles/index.scss';
import { Footer } from '@/components/layout/Footer/Footer';



const fontMain = Inter({
  variable: '--font-main',
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  display: 'swap',
});


const SITE_URL = 'https://example.kg';

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

// Заголовок и описание страницы на каждом языке (из lang/*.json → "Meta")
export const generateMetadata = async ({
  params,
}: LayoutProps<'/[locale]'>): Promise<Metadata> => {
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
    },
  };
};

const LocaleLayout = async ({ children, params }: LayoutProps<'/[locale]'>) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

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
};

export default LocaleLayout;