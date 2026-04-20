"use client";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    // Class animate-page-slide sẽ được định nghĩa ở globals.css
    <div className="animate-page-slide">
      {children}
    </div>
  );
}