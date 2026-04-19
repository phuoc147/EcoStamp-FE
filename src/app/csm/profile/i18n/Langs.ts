const vi = {
  level: "Level",
  forestGuardian: "Người Bảo Vệ Rừng",

  totalWaste: "Tổng rác thải đã cứu",
  wasteChange: "so với tháng trước",

  // Tách suffix để render: <CO2 /> {t.co2Suffix}
  co2Suffix: "GIẢM",
  waterSaved: "NƯỚC TIẾT KIỆM",

  accountInfo: "THÔNG TIN TÀI KHOẢN",
  phone: "Số điện thoại",
  email: "Email",
  address: "Địa chỉ đăng ký",

  qrSection: "MÃ QR CÁ NHÂN",
  qrOpen: "Nhấn để mở mã QR",
  qrHint: "Dùng để xác nhận tại các trạm thu gom",
  qrTitle: "Mã QR của bạn",
  qrClose: "Đóng",

  activitySettings: "HOẠT ĐỘNG & CÀI ĐẶT",
  history: "Lịch sử giao dịch",
  settings: "Cài đặt ứng dụng",
  language: "Ngôn ngữ",
  languageValue: "Tiếng Việt",
  help: "Trợ giúp & Hỗ trợ",

  registerStation: "Đăng ký trạm",
  registerStaff: "Đăng ký tài khoản nhân viên",

  logout: "Đăng xuất",
};

const en = {
  level: "Level",
  forestGuardian: "Forest Guardian",

  totalWaste: "Total waste rescued",
  wasteChange: "vs last month",

  co2Suffix: "REDUCED",
  waterSaved: "WATER SAVED",

  accountInfo: "ACCOUNT INFORMATION",
  phone: "Phone number",
  email: "Email",
  address: "Registered address",

  qrSection: "PERSONAL QR CODE",
  qrOpen: "Tap to open QR code",
  qrHint: "Use to verify at collection stations",
  qrTitle: "Your QR code",
  qrClose: "Close",

  activitySettings: "ACTIVITY & SETTINGS",
  history: "Transaction history",
  settings: "App settings",
  language: "Language",
  languageValue: "English",
  help: "Help & Support",

  registerStation: "Register a station",
  registerStaff: "Register staff account",

  logout: "Log out",
};

export const langs = { vi, en };
export type Lang = keyof typeof langs;
export type Translations = typeof vi;
