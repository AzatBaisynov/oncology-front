import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { locale as getRootLocale } from 'next/root-params';
import { routing } from './routing';

// Загружает файл переводов из папки lang/ для текущего языка
export default getRequestConfig(async ({ locale }) => {
  const requested = locale ?? (await getRootLocale());
  const current = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale: current,
    messages: (await import(`../../lang/${current}.json`)).default,
  };
});
