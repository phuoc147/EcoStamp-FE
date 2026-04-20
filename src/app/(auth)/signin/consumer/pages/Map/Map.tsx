"use client";

import "./Map.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

// ── Icon dùng CDN, tránh lỗi Leaflet SSR ──────────────────────
const customIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const createClusterCustomIcon = (cluster: any) =>
  divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });

type MarkerType = { geocode: [number, number]; popUp: string };
type MapProps = {
  onSelectLocation?: (lat: number, lng: number) => void;
  markers?: MarkerType[];
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

export default function Map({ onSelectLocation, markers = [] }: MapProps) {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={[10.7769, 106.7009]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        dragging
        scrollWheelZoom
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
          {markers.map((marker, i) => (
            <Marker key={i} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
