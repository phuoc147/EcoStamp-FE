import { useState, useEffect, type ChangeEvent } from "react";
type GeoInfo = {
  country?: string;
  countryCode?: string;
};
function Geo() {
  const [ipAddress, setIpAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState<GeoInfo>({});
  useEffect(() => {
    getVisitorIP();
  }, []);
  const getVisitorIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setIpAddress(data);
    } catch (error) {
      console.error("Failed to fetch IP:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIpAddress(e.target.value);
  };

  const fetchIPInfo = async () => {
    try {
      const response = await fetch(`https://ip-api.com/json/${ipAddress}`);
      const data = await response.json();
      setGeoInfo(data);
    } catch (error) {
      console.error("Failed to Location info:", error);
    }
  };

  return (
    <div className="Geo">
      <h3>IP to Location</h3>
      <div className="form-area">
        <input type="text" value={ipAddress} onChange={handleInputChange} />
        <button onClick={fetchIPInfo}>Get Info</button>
      </div>
      {geoInfo.country && (
        <div className="result">
          <strong>Country:</strong> {geoInfo.country}({geoInfo.countryCode})
        </div>
      )}
    </div>
  );
}

export default Geo;
