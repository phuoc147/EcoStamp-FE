import { useLang } from "@/src/i18n/LangContext";
import "./CloudToggle.css";

export default function CloudToggle() {
  const { lang, toggle } = useLang();

  return (
    <div className="cloud-toggle" onClick={toggle}>
      <div className="cloud">
        <div className="cloud-part c1" />
        <div className="cloud-part c2" />
        <div className="cloud-part c3" />
        <div className="cloud-text">{lang === "vi" ? "EN" : "VI"}</div>
      </div>
    </div>
  );
}
