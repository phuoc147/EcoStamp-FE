"use client";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

type Props = {
  onSelect: (address: string) => void;
};

function LocationMarker({ onSelect }: Props) {
  const [pos, setPos] = useState<any>(null);

  useMapEvents({
    click(e) {
      setPos(e.latlng);

      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`,
      )
        .then((res) => res.json())
        .then((data) => {
          onSelect(data.display_name);
        });
    },
  });

  return pos ? <Marker position={pos} /> : null;
}

export default function MapPicker({ onSelect }: Props) {
  return (
    <MapContainer
      center={[10.7769, 106.7009]} // HCM
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onSelect={onSelect} />
    </MapContainer>
  );
}
