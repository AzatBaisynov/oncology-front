"use client";

import { useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LAT, LNG } from "./data";

type Props = {
  title: string;
};

const PlaceMap = ({ title }: Props) => {
  const icon = useMemo(
    () =>
      L.divIcon({
        className: "cb-marker",
        iconSize: [0, 0],
        html: `
          <div class="cb-marker__wrap">
            <div class="cb__pin"><img src="/icons/marker.svg" alt="" /></div>
            <div class="cb__label">${title}</div>
          </div>`,
      }),
    [title]
  );

  return (
    <MapContainer
      center={[LAT, LNG]}
      zoom={17}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <ZoomControl position="bottomright" />
      <Marker position={[LAT, LNG]} icon={icon} />
    </MapContainer>
  );
};

export default PlaceMap;