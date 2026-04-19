"use client";
import { useState } from "react";
import "./Profile.css";
import { useLang } from "../../i18n/LangContext";

// ─── Mock data (thay bằng API thật sau) ──────────────────────
const USER = {
  name: "Trần Anh Tuấn",
  level: 12,
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAz_6URfAORade00f7wryrHcD6NMvJGS5ZGR-SzaslgvbNRdoDA_YNG3wMA87MGzSqWvv5in8gX2Vp55Ws1oxT2TGCzQHnmmLvmxD9_0OWMLVdviBia8wTMpxOOc0Po-lEba_6yta3fR9uaKYV4ajz0Fy5A5Q7W1kw_CjTs19-gBukpDNy1S9g7xE2rGV-QsdOkjTRe2gn1tbj-ocpP9TV7kC1ECqWs0b3PAU_Av1NN3Px2Q_8WHKE8lO55GfgxTfyGlcJFSUluITIx",
  phone: "+84 901 234 567",
  email: "tuan.tran@ecosamp.vn",
  address: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
  stats: {
    totalWaste: 124.5,
    wasteChange: "+12%",
    co2: 42.8,
    water: 1200,
  },
};

// ─── CO2 subscript ───────────────────────────────────────────
function CO2() {
  return (
    <span>
      CO<sub>2</sub>
    </span>
  );
}

// ─── QR Modal ────────────────────────────────────────────────
function QRModal({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  return (
    <div className="qr-overlay" onClick={onClose}>
      <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
        <p className="qr-modal-title">{t.qrTitle}</p>
        <div className="qr-modal-box">
          <span className="material-symbols-outlined qr-modal-icon">
            qr_code_2
          </span>
        </div>
        <p className="qr-modal-name">{USER.name}</p>
        <button type="button" className="qr-close-btn" onClick={onClose}>
          {t.qrClose}
        </button>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────
export default function Profile() {
  const { t, lang, toggle } = useLang();
  const [qrOpen, setQrOpen] = useState(false);
  const [showLangOptions, setShowLangOptions] = useState(false);
  return (
    <div className="profile-page">
      {qrOpen && <QRModal onClose={() => setQrOpen(false)} />}

      {/* Header */}
      <div className="profile-header">
        <div className="avatar-wrap">
          <div className="avatar-ring">
            <img src={USER.avatar} alt={USER.name} className="avatar-img" />
          </div>
          <span className="level-badge">
            {t.level} {USER.level}
          </span>
        </div>
        <h1 className="profile-name">{USER.name}</h1>
        <p className="profile-title">{t.forestGuardian}</p>
      </div>

      {/* Hero stat */}
      <div className="section">
        <div className="hero-card">
          <div className="hero-glow" />
          <p className="hero-label">{t.totalWaste}</p>
          <p className="hero-number">{USER.stats.totalWaste} kg</p>
          <div className="hero-change">
            <span className="material-symbols-outlined hero-arrow">
              trending_up
            </span>
            {USER.stats.wasteChange} {t.wasteChange}
          </div>
        </div>
      </div>

      {/* Mini stats */}
      <div className="section">
        <div className="mini-stats">
          <div className="mini-card">
            <div className="mini-icon mini-icon--co2">
              <span className="material-symbols-outlined">co2</span>
            </div>
            <p className="mini-value">{USER.stats.co2} kg</p>
            <p className="mini-label">
              <CO2 /> {t.co2Suffix}
            </p>
          </div>
          <div className="mini-card">
            <div className="mini-icon mini-icon--water">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <p className="mini-value">{USER.stats.water.toLocaleString()} L</p>
            <p className="mini-label">{t.waterSaved}</p>
          </div>
        </div>
      </div>

      {/* Account info */}
      <div className="section">
        <p className="section-title">{t.accountInfo}</p>
        <div className="info-card">
          <div className="info-row">
            <span className="material-symbols-outlined info-icon">call</span>
            <div className="info-content">
              <p className="info-sub">{t.phone}</p>
              <p className="info-main">{USER.phone}</p>
            </div>
          </div>
          <div className="info-divider" />
          <div className="info-row">
            <span className="material-symbols-outlined info-icon">mail</span>
            <div className="info-content">
              <p className="info-sub">{t.email}</p>
              <p className="info-main">{USER.email}</p>
            </div>
          </div>
          <div className="info-divider" />
          <div className="info-row">
            <span className="material-symbols-outlined info-icon">
              location_on
            </span>
            <div className="info-content">
              <p className="info-sub">{t.address}</p>
              <p className="info-main">{USER.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* QR */}
      <div className="section">
        <p className="section-title">{t.qrSection}</p>
        <button
          type="button"
          className="qr-card"
          onClick={() => setQrOpen(true)}
        >
          <div className="qr-icon-wrap">
            <span className="material-symbols-outlined qr-icon">qr_code_2</span>
          </div>
          <p className="qr-title">{t.qrOpen}</p>
          <p className="qr-sub">{t.qrHint}</p>
        </button>
      </div>

      {/* Menu */}
      <div className="section">
        <p className="section-title">{t.activitySettings}</p>
        <div className="menu-card">
          {[
            { icon: "history", label: t.history },
            { icon: "settings", label: t.settings },
            { icon: "language", label: t.language, isLanguage: true },
            { icon: "help", label: t.help },
          ].map((item, idx) => (
            <div key={item.label} style={{ position: "relative" }}>
              <button
                type="button"
                className="menu-row"
                onClick={() =>
                  item.isLanguage && setShowLangOptions((prev) => !prev)
                }
              >
                <div className="menu-left">
                  <span className="material-symbols-outlined menu-icon">
                    {item.icon}
                  </span>
                  <span className="menu-label">{item.label}</span>
                </div>
                {item.isLanguage ? (
                  <span className="menu-value">{t.languageValue} ▾</span>
                ) : (
                  <span className="material-symbols-outlined menu-chevron">
                    chevron_right
                  </span>
                )}
              </button>
              {item.isLanguage && showLangOptions && (
                <div className="lang-dropdown">
                  {lang === "vi" ? (
                    <button
                      className="lang-option"
                      onClick={() => {
                        toggle();
                        setShowLangOptions(false);
                      }}
                    >
                      <span>🇬🇧 Tiếng Anh</span>
                    </button>
                  ) : (
                    <button
                      className="lang-option"
                      onClick={() => {
                        toggle();
                        setShowLangOptions(false);
                      }}
                    >
                      <span>🇻🇳 Vietnamese</span>
                    </button>
                  )}
                </div>
              )}
              {idx < 3 && <div className="info-divider" />}
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="section action-section">
        <button type="button" className="action-btn action-btn--station">
          <span className="material-symbols-outlined">add_location_alt</span>
          {t.registerStation}
        </button>
        <button type="button" className="action-btn action-btn--staff">
          <span className="material-symbols-outlined">person_add</span>
          {t.registerStaff}
        </button>
      </div>

      {/* Logout */}
      <div className="section">
        <button type="button" className="logout-btn">
          <span className="material-symbols-outlined">logout</span>
          {t.logout}
        </button>
      </div>

      <div style={{ height: 24 }} />
    </div>
  );
}
