"use client"; // ← bắt buộc vì có useState, leaflet

import { useReducer, useState, useEffect, useRef } from "react";
import "./Register.css";
import { useLang } from "@/src/i18n/LangContext";
import type { Translations } from "@/src/i18n/langs"; // ← từ langs, không phải LangContext
import maleAvatar from "@/src/assets/male.jpg";
import femaleAvatar from "@/src/assets/female.jpg";
import otherAvatar from "@/src/assets/other.jpg";
import L from "leaflet";
const markerIcon = "/placeholder.png";
const iconUrl = "/marker-icon.png";
const shadowUrl = "/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useAutoLocation } from "../../hooks/useAutoLocation";
import { useLocationCtx } from "../../context/LocationContext";
import WeatherWidget from "../../components/WeatherWidget";
import dynamic from "next/dynamic";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
});

const customIcon = new Icon({
  iconUrl: markerIcon,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const createClusterCustomIcon = (cluster: any) => {
  return divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

type MarkerType = {
  geocode: [number, number];
  popUp: string;
};

type MapProps = {
  onSelectLocation?: (lat: number, lng: number) => void;
  markers?: MarkerType[]; // backend truyền vào sau
};

function UserLocator() {
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, 15);
    },
  });

  useEffect(() => {
    map.locate({ setView: false, maxZoom: 15 });
  }, [map]);

  return null;
}

function LocationMarker({ onSelectLocation }: any) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onSelectLocation?.(lat, lng);
    },
  });

  return position ? <Marker position={position} icon={customIcon} /> : null;
}

function Map({ onSelectLocation, markers = [] }: MapProps) {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={[10.7769, 106.7009]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        dragging={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UserLocator />
        <LocationMarker onSelectLocation={onSelectLocation} />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;
