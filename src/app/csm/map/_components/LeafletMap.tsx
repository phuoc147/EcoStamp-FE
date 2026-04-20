'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const createCustomIcon = (name: string) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `
      <div style="transform: translate(-50%, -100%); display: flex; flex-direction: column; align-items: center;">
        <div style="width: 40px; height: 40px; background: #1c3f25; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 21 8 22c-2.2 0-4-1.8-4-4 0-2.5 2-4.5 4.5-4.5h.5c.3 0 .5.2.5.5v2.5c0 .3-.2.5-.5.5h-.5a2 2 0 1 0 0 4h2a3 3 0 1 0 0-6H8a3 3 0 1 1 0-6h2a4 4 0 1 1 0 8H8a1 1 0 1 0 0 2h2a5 5 0 1 0 0-10H8a5 5 0 1 1 0 10h2a6 6 0 1 1 0-12H8a6 6 0 1 0 0 12h2a7 7 0 1 0 0-14H8a7 7 0 1 1 0 14h2z"></path></svg>
        </div>
        <div style="background: white; padding: 2px 10px; border-radius: 20px; font-size: 10px; font-weight: 900; color: #1c3f25; margin-top: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); white-space: nowrap; text-transform: uppercase;">
          ${name}
        </div>
      </div>
    `,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
};

export default function LeafletMap({ stations, onSelectStation }: any) {
  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={[10.7724, 106.6581]} 
        zoom={15} 
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; CartoDB'
        />
        {stations.map((station: any) => (
          <Marker 
            key={station.id} 
            position={[station.lat, station.lng]}
            icon={createCustomIcon(station.name)}
            eventHandlers={{ click: () => onSelectStation(station) }}
          />
        ))}
      </MapContainer>
    </div>
  );
}