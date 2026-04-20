"use client";

import { useEffect, useState } from "react";
import { useLocationCtx } from "../context/LocationContext";
import { useLang } from "@/src/i18n/LangContext";

const DEFAULT = { lat: 10.8231, lon: 106.6297, city: "TP. Hồ Chí Minh" };

function WeatherWidget() {
  const { location } = useLocationCtx();
  const { t } = useLang();
  const [weather, setWeather] = useState<{ temp: number; icon: string } | null>(
    null,
  );

  const loc = location ?? DEFAULT; // fallback TPHCM

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current_weather=true`,
        );
        const data = await res.json();
        const temp = data.current_weather.temperature;
        const code = data.current_weather.weathercode;
        let icon = "🌤️";
        if (code === 0) icon = "☀️";
        else if (code <= 3) icon = "⛅";
        else if (code <= 48) icon = "☁️";
        else icon = "🌧️";
        setWeather({ temp, icon });
      } catch (err) {
        console.error("Weather error", err);
      }
    };
    fetchWeather();
  }, [loc.lat, loc.lon]);

  if (!weather) return null;

  return (
    <div className="weather-widget">
      <span>{weather.icon}</span>
      <span className="weather-temp">{weather.temp}°C</span>
      <span className="weather-city">{loc.city || "TP. Hồ Chí Minh"}</span>
    </div>
  );
}

export default WeatherWidget;
