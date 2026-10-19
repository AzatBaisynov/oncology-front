import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

// Подключает настройки i18n из src/i18n/request.ts
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,


  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
    ],
  },
  
  sassOptions: {
    // Папка, из которой SCSS ищет файлы по короткому имени ("mixins")
    loadPaths: [path.join(process.cwd(), 'src/styles')],
    // Миксины автоматически доступны в каждом .module.scss без импорта
    additionalData: `@use "mixins" as *;\n`,
  },
};

export default withNextIntl(nextConfig);
