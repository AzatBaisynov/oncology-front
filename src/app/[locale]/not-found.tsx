import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button/Button';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="title">404</h1>
        <p className="subtitle" style={{ marginInline: 'auto', marginBottom: 32 }}>
          {t('title')}
        </p>
        <Button href="/">{t('back')}</Button>
      </div>
    </section>
  );
}
