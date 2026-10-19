import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

// Замените на свой домен
const SITE_URL = 'https://example.kg';

// Доступен по адресу /sitemap.xml — по одной ссылке на каждый язык
const sitemap = (): MetadataRoute.Sitemap => {
  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}`])),
    },
  }));
};

export default sitemap;
