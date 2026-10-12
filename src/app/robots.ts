import type { MetadataRoute } from 'next';

// Замените на свой домен
const SITE_URL = 'https://example.kg';

// Доступен по адресу /robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
