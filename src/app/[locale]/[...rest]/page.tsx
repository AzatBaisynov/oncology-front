import { notFound } from 'next/navigation';

// Любой несуществующий адрес (/ru/xyz) показывает нашу страницу 404 на нужном языке
const CatchAllPage = () => {
  notFound();
};

export default CatchAllPage;
