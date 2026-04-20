'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import SearchAndFilter from './_components/SearchAndFilter';
import StationDetailCard from './_components/StationDetailCard';

const MapComponent = dynamic(() => import('./_components/LeafletMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#f4faec]" />
});

export default function MapPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStation, setSelectedStation] = useState<any>(null);

  const STATIONS = [
    { id: 1, name: "Trạm Bách Khoa", lat: 10.7724, lng: 106.6581, address: "268 Lý Thường Kiệt", distance: "Gần bạn", rating: 4.9, status: "CÒN CHỖ" },
    { id: 2, name: "Trạm Landmark", lat: 10.7948, lng: 106.7218, address: "208 Nguyễn Hữu Cảnh", distance: "3.2km", rating: 4.8, status: "SẮP ĐẦY" },
  ];

  return (
    // h-[calc(100vh-152px)] = 100vh - Header(72px) - Navbar(80px)
    <div className="relative w-full h-full">
      <MapComponent 
        stations={STATIONS} 
        onSelectStation={setSelectedStation} 
      />
      
      {/* UI Lọc & Card vẫn giữ absolute để nổi lên trên Map */}
      <SearchAndFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      
      {selectedStation && (
        <StationDetailCard 
          station={selectedStation} 
          onClose={() => setSelectedStation(null)} 
        />
      )}
    </div>
  );
}