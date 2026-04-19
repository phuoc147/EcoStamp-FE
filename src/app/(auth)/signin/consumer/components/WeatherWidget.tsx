import { useEffect, useState } from "react";
import { useLocationCtx } from "../context/LocationContext";
import { useLang } from "@/src/i18n/LangContext";

function WeatherWidget() {
  const { location } = useLocationCtx();
  const { t } = useLang();
  const [weather, setWeather] = useState<{
    temp: number;
    icon: string;
  } | null>(null);

  useEffect(() => {
    if (!location?.lat || !location?.lon) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`,
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
  }, [location]);

  if (!location) {
    return <div>📍 {t.chooseLocation}</div>;
  }

  if (!weather) {
    return <div>⏳ {t.weatherLoading}</div>;
  }

  return (
    <div className="weather-widget">
      <div style={{ fontSize: "2rem" }}>{weather.icon}</div>
      <div>{weather.temp}°C</div>
      <div>{location.city || "Selected location"}</div>
    </div>
  );
}

export default WeatherWidget;
