export const PHONE = "+996 (312) 66-20-20";
export const LAT = 42.839483;
export const LNG = 74.613748;

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