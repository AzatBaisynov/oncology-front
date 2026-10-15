export type Lang = "kg" | "en" | "ru";

export const LANGS: { id: Lang; label: string }[] = [
  { id: "kg", label: "KG" },
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
];

export const HTML_LANG: Record<Lang, string> = {
  kg: "ky",
  en: "en",
  ru: "ru",
};

export type Translation = {
  eyebrow: string;
  heading: string;
  address: string;
  title: string;
  phoneNote: string;
  button: string;
  pickerTitle: string;
  pickerSub: string;
  close: string;
  mapLabel: string;
  routes: { google: string; gis: string };
};

export const TEXT: Record<Lang, Translation> = {
  ru: {
    eyebrow: "Как к нам добраться",
    heading: "Мы рядом",
    address: "г. Бишкек, ул. Исы Ахунбаева, 92",
    title: "Национальный центр онкологии",
    phoneNote: "Единый контакт-центр",
    button: "Построить маршрут",
    pickerTitle: "Построить маршрут",
    pickerSub: "Выберите приложение для навигации",
    close: "Закрыть",
    mapLabel: "Карта",
    routes: { google: "Google Maps", gis: "2ГИС" },
  },
  en: {
    eyebrow: "How to find us",
    heading: "We are nearby",
    address: "92 Isy Akhunbaeva St., Bishkek",
    title: "National Oncology Center",
    phoneNote: "Unified contact center",
    button: "Get directions",
    pickerTitle: "Get directions",
    pickerSub: "Choose a navigation app",
    close: "Close",
    mapLabel: "Map",
    routes: { google: "Google Maps", gis: "2GIS" },
  },
  kg: {
    eyebrow: "Бизге кантип жетүүгө болот",
    heading: "Биз жакынбыз",
    address: "Бишкек ш. И. Ахунбаев көч., 92",
    title: "Улуттук онкология борбору",
    phoneNote: "Бирдиктүү байланыш борбору",
    button: "Маршрут түзүү",
    pickerTitle: "Маршрут түзүү",
    pickerSub: "Навигация үчүн тиркемени тандаңыз",
    close: "Жабуу",
    mapLabel: "Карта",
    routes: { google: "Google Maps", gis: "2ГИС" },
  },
};

export const PHONE = "+996 (312) 66-20-20";

const LAT = 42.839483;
const LNG = 74.613748;
const GIS_FIRM_ID = "70000001021126125";

export type RouteOption = {
  id: "google" | "gis";
  icon: string;
  url: () => string;
};

export const ROUTE_OPTIONS: RouteOption[] = [
  {
    id: "google",
    icon: "/icons/google-maps.svg",
       url: () =>
      `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`,
  },
  {
    id: "gis",
    icon: "/icons/2gis.svg",
    url: () =>
      `https://2gis.kg/bishkek/directions/points/%7C${LNG}%2C${LAT}%3B${GIS_FIRM_ID}`,
  },
];