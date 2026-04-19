"use client";

import { useReducer, useState, useEffect, useRef } from "react";
import "./Register.css";
import { useLang } from "@/src/i18n/LangContext";
import type { Translations } from "@/src/i18n/langs";
import maleAvatar from "../../assets/male.jpg";
import femaleAvatar from "../../assets/female.jpg";
import otherAvatar from "../../assets/other.jpg";
const iconUrl = "/marker-icon.png";
const shadowUrl = "/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useAutoLocation } from "../../hooks/useAutoLocation";
import { useLocationCtx } from "../../context/LocationContext";
import WeatherWidget from "../../components/WeatherWidget";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../Map/Map"), { ssr: false });
type FormState = {
  name: string;
  email: string;
  password: string;
  confirm: string;
  phone: string;
  address: string;
};
type Action = { type: "UPDATE_FIELD"; field: keyof FormState; value: string };

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const pwChecks = {
  length: (p: string) => p.length >= 8,
  lower: (p: string) => /[a-z]/.test(p),
  upper: (p: string) => /[A-Z]/.test(p),
  number: (p: string) => /\d/.test(p),
  special: (p: string) => /[^a-zA-Z\d]/.test(p),
};

const getStrength = (p: string) =>
  p ? Object.values(pwChecks).filter((fn) => fn(p)).length : 0;

const validate = (form: FormState, m: Translations) => {
  const errors: Record<string, string> = {};
  if (!form.name) errors.name = m.fieldRequired;
  if (!form.email) errors.email = m.fieldRequired;
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = m.emailInvalid;

  if (!form.password) errors.password = m.fieldRequired;
  else if (!Object.values(pwChecks).every((fn) => fn(form.password)))
    errors.password = m.passwordWeak;

  if (form.password !== form.confirm) errors.confirm = m.passwordMismatch;
  if (!form.phone) errors.phone = m.fieldRequired;
  if (!form.address) errors.address = m.fieldRequired;

  return errors;
};

const defaultAvatars = {
  male: maleAvatar,
  female: femaleAvatar,
  other: otherAvatar,
};

function buildAddressFromNominatim(address: any) {
  if (!address) return "";
  const house = address.house_number || address.building || "";
  const road =
    address.road ||
    address.pedestrian ||
    address.cycleway ||
    address.footway ||
    "";
  const ward = address.suburb || address.neighbourhood || address.village || "";
  const district =
    address.city_district || address.district || address.town || "";
  const city = address.city || address.province || address.state || "";
  const country = address.country || "";
  return [house, road, ward, district, city, country]
    .filter(Boolean)
    .join(", ");
}

const reverseGeocode = async (lat: number, lng: number, lang: "vi" | "en") => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
    if (apiKey) {
      const res = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${apiKey}&lang=${lang}`,
      );
      const data = await res.json();
      const formatted = data.features?.[0]?.properties?.formatted;
      if (formatted) return formatted;
    }
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=${lang}`,
    );
    const data = await res.json();
    const addr = buildAddressFromNominatim(data.address);
    if (addr && addr.trim() !== "") return addr;
    if (data.display_name) return data.display_name;
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  } catch (err) {
    console.error("reverseGeocode error:", err);
    return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  }
};

// ── Sun Ring ──────────────────────────────────────────────────
function SunRing() {
  const rays = 10;
  return (
    <svg
      className="sun-ring"
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: rays }).map((_, i) => {
        const angle = (360 / rays) * i;
        const toRad = (a: number) => (a * Math.PI) / 180;
        const cx = 70,
          cy = 70,
          innerR = 50,
          outerR = 68,
          hIn = 4,
          hOut = 9;
        const a = toRad(angle),
          aL = toRad(angle - 90),
          aR = toRad(angle + 90);
        const x1 = cx + innerR * Math.cos(a) + hIn * Math.cos(aL),
          y1 = cy + innerR * Math.sin(a) + hIn * Math.sin(aL);
        const x2 = cx + innerR * Math.cos(a) + hIn * Math.cos(aR),
          y2 = cy + innerR * Math.sin(a) + hIn * Math.sin(aR);
        const x3 = cx + outerR * Math.cos(a) + hOut * Math.cos(aR),
          y3 = cy + outerR * Math.sin(a) + hOut * Math.sin(aR);
        const x4 = cx + outerR * Math.cos(a) + hOut * Math.cos(aL),
          y4 = cy + outerR * Math.sin(a) + hOut * Math.sin(aL);
        return (
          <polygon
            key={i}
            points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`}
            fill="#ffe234"
            stroke="#f9a825"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        );
      })}
      <circle cx="70" cy="70" r="49" fill="white" />
    </svg>
  );
}

function StrengthBar({ strength, t }: { strength: number; t: Translations }) {
  if (!strength) return null;
  const colors = ["#ef5350", "#ff7043", "#ffa726", "#66bb6a", "#2e7d32"];
  const labels = [
    "",
    t.strengthVeryWeak,
    t.strengthWeak,
    t.strengthMedium,
    t.strengthStrong,
    t.strengthVeryStrong,
  ];
  return (
    <div className="strength-wrap">
      <div className="strength-bar">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`strength-seg ${i < strength ? "active" : ""}`}
            style={{
              background: i < strength ? colors[strength - 1] : undefined,
            }}
          />
        ))}
      </div>
      <span className="strength-label" style={{ color: colors[strength - 1] }}>
        {labels[strength]}
      </span>
    </div>
  );
}

function PwChecklist({ password, t }: { password: string; t: Translations }) {
  const items = [
    { label: t.pwCheckLength, fn: pwChecks.length },
    { label: t.pwCheckLower, fn: pwChecks.lower },
    { label: t.pwCheckUpper, fn: pwChecks.upper },
    { label: t.pwCheckNumber, fn: pwChecks.number },
    { label: t.pwCheckSpecial, fn: pwChecks.special },
  ];
  return (
    <div className="pw-checklist">
      {items.map((item, i) => (
        <div
          key={i}
          className={`pw-check-item ${item.fn(password) ? "ok" : ""}`}
        >
          <span className="pw-check-icon">{item.fn(password) ? "✓" : "○"}</span>
          {item.label}
        </div>
      ))}
    </div>
  );
}

function LeafConfetti() {
  const leaves = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    dur: 4 + Math.random() * 3,
    drift: (Math.random() - 0.5) * 100,
    emoji: ["🍃", "🌿", "🍀", "🌱"][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="confetti-wrap">
      {leaves.map((l) => (
        <div
          key={l.id}
          className="confetti-leaf"
          style={{
            left: l.x + "%",
            top: "-10%",
            animationDelay: l.delay + "s",
            animationDuration: l.dur + "s",
            ["--drift" as any]: `${l.drift}px`,
          }}
        >
          {l.emoji}
        </div>
      ))}
    </div>
  );
}

function SuccessScreen() {
  const { t } = useLang();
  return (
    <div className="success-scene">
      <LeafConfetti />
      <div className="success-sky"></div>
      <div className="success-grass-curtain" />
      <div className="success-card">
        <span className="success-icon">
          <span className="material-symbols-outlined">eco</span>
        </span>
        <p className="success-title">{t.successTitle}</p>
        <p className="success-sub">{t.successSubtitle}</p>
      </div>
    </div>
  );
}

export default function Register() {
  useAutoLocation();
  const { setLocation: setLocationCtx } = useLocationCtx();
  const { t, lang, toggle } = useLang();
  const addressRef = useRef<HTMLInputElement>(null);
  const [gender, setGender] = useState<"male" | "female" | "other">("other");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showFormWarning, setShowFormWarning] = useState(false);
  const [touched, setTouched] = useState<any>({});
  const [showMap, setShowMap] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
    confirm: "",
    phone: "",
    address: "",
  });
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const strength = getStrength(form.password);

  const handleChange = (e: any) =>
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });

  const handleAvatar = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      alert(t.alertInvalidImageType);
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert(t.alertImageTooLarge);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAvatar(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleBlur = (e: any) => {
    const name = e.target.name;

    setTouched((prev: any) => ({
      ...prev,
      [name]: true,
    }));

    const newErrors = validate(form, t);
    setErrors(newErrors);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors = validate(form, t);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    if (!agreed) {
      alert(t.alertAgreeTerms);
      return;
    }
    setSubmitted(true);
  };

  const isFieldValid = (name: keyof FormState) => {
    if (!form[name]) return false;
    if (errors[name]) return false;
    if (name === "password") return getStrength(form.password) === 5;
    return true;
  };

  const isFormReady = () =>
    isFieldValid("name") &&
    isFieldValid("email") &&
    isFieldValid("password") &&
    isFieldValid("confirm") &&
    form.phone.trim() !== "" &&
    form.address.trim() !== "";

  useEffect(() => {
    if (!location) return;
    reverseGeocode(location.lat, location.lng, lang).then((address) => {
      dispatch({
        type: "UPDATE_FIELD",
        field: "address",
        value: address,
      });
    });
  }, [lang, location]);

  if (submitted) return <SuccessScreen />;

  return (
    <div className={`container`}>
      <div className="card">
        <WeatherWidget />
        <div className="cloud-toggle" onClick={toggle}>
          <div className="cloud">
            <div className="cloud-part c1" />
            <div className="cloud-part c2" />
            <div className="cloud-part c3" />
            <div className="cloud-text">{lang === "vi" ? "EN" : "VI"}</div>
          </div>
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.5rem", lineHeight: 1 }}
          >
            eco
          </span>
          <h2 style={{ margin: 0 }}>{t.title}</h2>
        </div>

        {/* Avatar */}
        <div className="avatar-section">
          <SunRing />
          <div
            className="avatar-wrapper"
            onClick={() => fileRef.current?.click()}
          >
            <img
              src={avatar ?? defaultAvatars[gender]}
              className="avatar-img"
              alt={t.avatarAlt}
            />
            {avatar && (
              <button
                type="button"
                className="avatar-remove"
                onClick={handleRemoveAvatar}
              >
                ✕
              </button>
            )}
            {!avatar && <div className="avatar-badge">+</div>}
            <input ref={fileRef} type="file" hidden onChange={handleAvatar} />
          </div>
        </div>

        {/* Gender */}
        <div className="gender-group">
          {(["male", "female", "other"] as const).map((g) => (
            <label
              key={g}
              className={`gender-btn ${gender === g ? "active" : ""}`}
              onClick={() => setGender(g)}
            >
              <img
                src={
                  g === "male"
                    ? "/icons/male.png"
                    : g === "female"
                      ? "/icons/female.png"
                      : "/icons/trans.png"
                }
                alt="gender"
                style={{ width: 16, height: 16 }}
              />
              {t[g as keyof typeof t] as string}
            </label>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* ── WHITE FIELDS CARD ── */}
          <div className="fields-card">
            {/* NAME */}
            <div className="field-group">
              <label>{t.name}</label>
              <div className="input-wrap">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Nguyễn Văn A"
                  className={isFieldValid("name") ? "is-valid" : ""}
                />
              </div>
              {(touched.name || showFormWarning) && errors.name && (
                <div className="inline-error">⚠ {errors.name}</div>
              )}
            </div>

            {/* EMAIL */}
            <div className="field-group">
              <label>{t.email}</label>
              <div className="input-wrap">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="a@gmail.com"
                  className={isFieldValid("email") ? "is-valid" : ""}
                />
              </div>
              {(touched.email || showFormWarning) && errors.email && (
                <div className="inline-error">⚠ {errors.email}</div>
              )}
            </div>

            {/* PASSWORD */}
            <div className="field-group">
              <label>{t.password}</label>
              <div className="input-wrap">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={(e) => {
                    setFocusedField(null);
                    handleBlur(e);
                  }}
                  placeholder="svCSE2026!"
                  className={isFieldValid("password") ? "is-valid" : ""}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
              <StrengthBar strength={strength} t={t} />
              {(focusedField === "password" ||
                (touched.password && errors.password)) && (
                <PwChecklist password={form.password} t={t} />
              )}
              {touched.password && errors.password && (
                <div className="inline-error">⚠ {errors.password}</div>
              )}
            </div>

            {/* CONFIRM */}
            <div className="field-group">
              <label>{t.confirm}</label>
              <div className="input-wrap">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  onBlur={(e) => {
                    setFocusedField(null);
                    handleBlur(e);
                  }}
                  onFocus={() => setFocusedField("confirm")}
                  className={isFieldValid("confirm") ? "is-valid" : ""}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? "🙈" : "👁️"}
                </button>
              </div>
              {touched.confirm && errors.confirm && (
                <div className="inline-error">⚠ {errors.confirm}</div>
              )}
            </div>

            {/* PHONE */}
            <div className="field-group">
              <label>{t.phone}</label>
              <div className="input-wrap">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="0123456789"
                  className={form.phone ? "is-valid" : ""}
                />
              </div>
              {touched.phone && errors.phone && (
                <div className="inline-error">⚠ {errors.phone}</div>
              )}
            </div>

            {/* ADDRESS */}
            <div className="field-group field-group--last">
              <label>{t.address}</label>
              <div className="input-wrap">
                <input
                  ref={addressRef}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="70 Lữ Gia, Q.11, TP.HCM"
                  className={form.address ? "is-valid" : ""}
                />
              </div>
              {touched.address && errors.address && (
                <div className="inline-error">⚠ {errors.address}</div>
              )}
            </div>

            {/* MAP BUTTON */}
            <button
              type="button"
              className="map-btn"
              onClick={() => setShowMap(true)}
            >
              📍 {t.choose}
            </button>
          </div>
          {/* end fields-card */}

          {/* TERMS */}
          <div className="terms-wrap">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              disabled={!isFormReady()}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            {showMap && (
              <div
                className="map-overlay"
                onMouseDown={(e) => {
                  if (e.target === e.currentTarget) setShowMap(false);
                }}
              >
                <div
                  className="map-container-wrapper"
                  style={{
                    position: "relative",
                    width: "90%",
                    maxWidth: "500px",
                    height: "400px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    zIndex: 1000,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowMap(false)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      zIndex: 1000,
                      border: "none",
                      background: "white",
                      borderRadius: "50%",
                      cursor: "pointer",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    ✕
                  </button>
                  <Map
                    onSelectLocation={async (lat, lng) => {
                      setLocation({ lat, lng });
                      const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=${lang}`,
                      );
                      const data = await res.json();
                      const addr = buildAddressFromNominatim(data.address);
                      const finalAddress =
                        addr ||
                        data.display_name ||
                        `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
                      dispatch({
                        type: "UPDATE_FIELD",
                        field: "address",
                        value: finalAddress,
                      });
                      const province =
                        data.address?.city ||
                        data.address?.province ||
                        data.address?.state ||
                        data.address?.town ||
                        "TP. Hồ Chí Minh";
                      setLocationCtx({
                        lat,
                        lon: lng,
                        city: province,
                        country: data.address?.country || "Vietnam",
                      });
                      setShowMap(false);
                    }}
                  />
                </div>
              </div>
            )}
            <label
              htmlFor="agree"
              onClick={() => {
                if (!isFormReady()) {
                  setShowFormWarning(true);
                  setTimeout(() => setShowFormWarning(false), 3000);
                }
              }}
            >
              {t.termsLead} <span className="terms-link">{t.termsService}</span>{" "}
              {t.termsAnd} <span className="terms-link">{t.termsPrivacy}</span>
            </label>
          </div>

          {showFormWarning && (
            <div className="form-warning">⚠ {t.formWarningFillRequired}</div>
          )}

          <button
            type="submit"
            disabled={!agreed}
            className={!agreed ? "btn-disabled" : ""}
          >
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
