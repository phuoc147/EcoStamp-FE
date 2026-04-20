import React from 'react';

export default function RewardCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white rounded-4xl p-6 shadow-sm border border-gray-50 ${className}`}>
      {children}
    </div>
  );
}