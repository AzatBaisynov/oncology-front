export interface NewsItem {
  id: string | number;
  image: string;
  date: string;
  title: string;
}

export interface NewsSectionProps {
  newsList?: NewsItem[];
}
