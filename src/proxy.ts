import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Определяет язык посетителя и перенаправляет: / → /ru
export default createMiddleware(routing);

export const config = {
  // Не трогаем служебные пути и файлы с расширением (картинки, иконки и т.д.)
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
