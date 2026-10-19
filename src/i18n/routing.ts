import { defineRouting } from 'next-intl/routing';

// Список языков сайта и язык по умолчанию.
// Чтобы добавить язык: допишите его сюда и создайте lang/<код>.json
export const routing = defineRouting({
  locales: ['ru', 'ky', 'en'],
  defaultLocale: 'ky',
});
