# Landing

Лендинг на **Next.js 16** (App Router) + **TypeScript** + **SCSS** + мультиязычность **next-intl** (ru / ky / en).

## Запуск

```bash
npm install      # установить зависимости (один раз после клонирования)
npm run dev      # режим разработки → http://localhost:3000
npm run build    # сборка для продакшена
npm run start    # запуск собранной версии
npm run lint     # проверка кода
```

Нужен Node.js 20.9 или новее.

## Структура

```
lang/                     переводы: ru.json, ky.json, en.json
public/
  images/<секция>/        картинки, по папке на секцию + common/
  icons/                  svg-иконки, логотип
src/
  app/
    [locale]/
      layout.tsx          html, шрифт, мета-данные, Header и Footer
      page.tsx            лендинг: здесь подключаются секции по порядку
      not-found.tsx       страница 404
      [...rest]/          отправляет несуществующие адреса на 404
    favicon.ico           иконка сайта (замените, имя оставьте)
    robots.ts             /robots.txt
    sitemap.ts            /sitemap.xml
  components/
    ui/                   мелкие переиспользуемые элементы (Button)
    layout/               Header, Footer, LanguageSwitcher
    sections/             секции лендинга
  i18n/
    routing.ts            список языков и язык по умолчанию
    request.ts            загрузка переводов из lang/
    navigation.ts         Link / useRouter, сохраняющие язык
  styles/
    reset.scss            сброс браузерных стилей
    variables.scss        цвета, шрифты, размеры (CSS-переменные)
    mixins.scss           адаптив и заготовки (подключается автоматически)
    typography.scss       текст, заголовки, .title, .subtitle
    main.scss             .container, .section, .visually-hidden
    index.scss            собирает всё, подключён в layout
  proxy.ts                редирект / → /ru и определение языка
```

## Шаблон секции

```tsx
import { useTranslations } from 'next-intl';
import styles from './Reviews.module.scss';

export function Reviews() {
  const t = useTranslations('Reviews');

  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2 className="title">{t('title')}</h2>
        {/* своя вёрстка */}
      </div>
    </section>
  );
}
```

## Как добавить новую секцию

1. Создать `src/components/sections/Reviews/` с файлами `Reviews.tsx` и `Reviews.module.scss`.
2. Создать папку для картинок `public/images/reviews/`.
3. Добавить блок `"Reviews": { ... }` во **все** файлы в `lang/`.
4. Подключить `<Reviews />` в `src/app/[locale]/page.tsx`.

## Общие правила

- Цвета, шрифты и размеры брать только из переменных: `color: var(--color-accent)`.
- Адаптив писать через миксины: `@include mq(md) { ... }`. Импортировать миксины не нужно.
- Ссылки внутри сайта — через `Link` из `@/i18n/navigation`, якоря — обычным `<a href="#id">`.
- Тексты не писать в разметке, только в `lang/*.json`.

## Перед запуском в продакшен

- Заменить `https://example.kg` на свой домен в `layout.tsx`, `robots.ts`, `sitemap.ts`.
- Заполнить блок `"Meta"` в `lang/*.json`.
- Положить `og-image.jpg` в `public/images/common/` и раскомментировать строку `images` в `layout.tsx`.
- Заменить `src/app/favicon.ico`.
