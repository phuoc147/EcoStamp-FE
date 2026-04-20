import React from 'react';

// Import các components đã chia nhỏ
import ProgressBanner from './_components/ProgressBanner';
import TotalStamps from './_components/TotalStamps';
import ImpactStats from './_components/ImpactStats';
import NearbyStations from './_components/NearbyStations';
import GreenTips from './_components/GreenTips';
import RecentActivity from './_components/RecentActivity';

export default function ConsumerDashboard() {
  return (
    <div className="px-5 pb-32 animate-in fade-in duration-500">
      <ProgressBanner />
      <TotalStamps />
      <ImpactStats />
      <NearbyStations />
      <GreenTips />
      <RecentActivity />
    </div>
  );
}