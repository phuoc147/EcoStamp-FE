"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/src/i18n/LangContext";
import "./Role.css";

type Role = "consumer" | "employee" | "partner";
export default function Role() {
  const { t, lang, toggle } = useLang();
  const [selected, setSelected] = useState<Role | null>(null);
  const router = useRouter();

  const handleClick = (role: Role) => {
    setSelected(role);
    setTimeout(() => {
      router.push(`/signin/${role}`);
    }, 1200);
  };

  return (
    <div className={`role-container`}>
      <div className="card">
        {/* Cloud toggle */}
        <div className="cloud-toggle" onClick={toggle}>
          <div className="cloud">
            <div className="cloud-part c1" />
            <div className="cloud-part c2" />
            <div className="cloud-part c3" />
            <div className="cloud-text">{lang === "vi" ? "EN" : "VI"}</div>
          </div>
        </div>

        <div className="role-header">
          <span className="material-symbols-outlined">eco</span>
          <h2 style={{ margin: 0, color: "#2e7d32" }}>{t.chooseRole}</h2>
        </div>

        <div className="role-grid">
          {(["consumer", "employee", "partner"] as Role[]).map((role) => (
            <div
              key={role}
              className={`role-card ${selected === role ? "active" : ""}`}
              onClick={() => handleClick(role)}
            >
              {selected === role && (
                <div className="role-bloom-container">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className={`role-border-flower role-flower-${i + 1}`}
                    >
                      <div className="flower-center" />
                    </div>
                  ))}
                </div>
              )}
              <span className="role-card-icon">
                {role === "consumer" ? "🌱" : role === "employee" ? "♻️" : "🤝"}
              </span>
              <span className="role-card-label">
                {role === "consumer"
                  ? t.user
                  : role === "employee"
                    ? t.staff
                    : t.partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
