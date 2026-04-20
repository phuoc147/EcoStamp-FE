"use client";
import { useState } from "react";
import "./Login.css";
import { useLang } from "@/src/i18n/LangContext";
import { useRouter } from "next/navigation";
type FormState = {
  name: string;
  password: string;
  role: string;
};

export default function Login() {
  const router = useRouter();
  const { t, lang, toggle } = useLang();
  const [form, setForm] = useState<FormState>({
    name: "",
    password: "",
    role: "consumer",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPass, setShowPass] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const err: Record<string, string> = {};
    if (!form.name) err.name = t.fieldRequired;
    if (!form.password) err.password = t.fieldRequired;
    return err;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    const saved = JSON.parse(localStorage.getItem("user") || "{}");
    if (
      form.role === saved.role &&
      form.name === saved.name &&
      form.password === saved.password
    ) {
      alert(t.loginSuccess);
    } else {
      alert(t.loginFail);
    }
  };

  return (
    <div className={`login-container`}>
      <div className="login-card">
        {/* Cloud toggle VI/EN */}
        <div className="cloud-toggle" onClick={toggle}>
          <div className="cloud">
            <div className="cloud-part c1" />
            <div className="cloud-part c2" />
            <div className="cloud-part c3" />
            <div className="cloud-text">{lang === "vi" ? "EN" : "VI"}</div>
          </div>
        </div>

        <div className="login-header">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.8rem", lineHeight: 1, color: "#2e7d32" }}
          >
            eco
          </span>
          <h2 style={{ margin: 0, color: "#2e7d32" }}>{t.welcomeBack}</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* WHITE GROUP CARD */}
          <div className="form-group-card">
            {/* Role dropdown */}
            <div className="field-group">
              <label>{t.chooseRole}</label>
              <div className="input-wrap">
                <select
                  name="role"
                  value={form.role || ""}
                  onChange={handleChange}
                  className={
                    errors.role ? "is-invalid" : form.role ? "is-valid" : ""
                  }
                >
                  <option value="" disabled>
                    {t.chooseRole}
                  </option>
                  <option value="consumer">{t.user}</option>
                  <option value="partner">{t.partner}</option>
                  <option value="employee">{t.staff}</option>
                </select>
              </div>
            </div>
            {/* NAME */}
            <div className="field-group">
              <label>{t.username}</label>
              <div className="input-wrap">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.username + "..."}
                  className={
                    errors.name ? "is-invalid" : form.name ? "is-valid" : ""
                  }
                />
              </div>
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
                  placeholder={t.password + "..."}
                  className={
                    errors.password
                      ? "is-invalid"
                      : form.password
                        ? "is-valid"
                        : ""
                  }
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>
          </div>
          <button className="login-btn" type="submit">
            {t.login}
          </button>
        </form>

        <p className="switch">
          {t.noAccount}{" "}
          <span onClick={() => router.push("/role")}>{t.signUp}</span>
        </p>
      </div>
    </div>
  );
}
