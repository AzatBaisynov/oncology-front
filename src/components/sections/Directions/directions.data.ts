import { DirectionItem } from "./directions.types";

export const DIRECTIONS_DATA: Omit<DirectionItem, 'titleKey' | 'descKey' | 'link'>[] = [
  {
    id: 'diagnostics',
    image: '/images/directions/diagnostics.jpg',
  },
  {
    id: 'surgery',
    image: '/images/directions/surgery.jpg',
  },
  {
    id: 'radiation',
    image: '/images/directions/radiotherapy.jpg',
  },
];

export const getLocalizedDirections = (): DirectionItem[] => {
  return DIRECTIONS_DATA.map((item) => ({
    ...item,
    link: `/directions/${item.id}`,
    titleKey: `${item.id}.title`,
    descKey: `${item.id}.description`,
  }));
}