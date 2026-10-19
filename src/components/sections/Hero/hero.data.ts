export type HeroCardKey = 'diagnostics' | 'treatment' | 'rehab' | 'consult';

export type HeroCard = {
  key: HeroCardKey;
  path: string;
};

export const heroCards: HeroCard[] = [
  { key: 'diagnostics', path: '/icons/hero/diagnostics.svg' },
  { key: 'treatment', path: '/icons/hero/treatment.svg' },
  { key: 'rehab', path: '/icons/hero/rehab.svg' },
  { key: 'consult', path: '/icons/hero/consult.svg' },
];