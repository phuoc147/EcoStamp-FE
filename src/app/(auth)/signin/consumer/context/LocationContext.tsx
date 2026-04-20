"use client";
import { createContext, useContext, useState } from "react";

type Location = {
  lat: number;
  lon: number;
  city?: string;
  country?: string;
};

type LocationContextType = {
  location: Location | null;
  setLocation: (loc: Location) => void;
};

const LocationContext = createContext<LocationContextType>({
  location: null,
  setLocation: () => {},
});

export const useLocationCtx = () => useContext(LocationContext);

export function LocationProvider({ children }: any) {
  const [location, setLocation] = useState<Location | null>(null);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
