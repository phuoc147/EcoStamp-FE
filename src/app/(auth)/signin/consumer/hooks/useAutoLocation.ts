import { useEffect } from "react";
import { useLocationCtx } from "../context/LocationContext";

export function useAutoLocation() {
  const { setLocation } = useLocationCtx();

// SAU:
  useEffect(() => {
    // 🔥 Mặc định TPHCM ngay lập tức, không cần chờ GPS
    setLocation({
      lat: 10.8231,
      lon: 106.6297,
      city: "TP. Hồ Chí Minh",
      country: "Vietnam",
    });

    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );
          const data = await res.json();

          setLocation({
            lat,
            lon,
            city: data.address.city || data.address.town || data.address.village,
            country: data.address.country,
          });
        } catch {
          setLocation({ lat, lon });
        }
      },
      () => {
        setLocation({
          lat: 10.8231,
          lon: 106.6297,
          city: "Ho Chi Minh City",
          country: "Vietnam",
        });
      }
    );
  }, []);
}