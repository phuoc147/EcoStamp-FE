import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Nhớ giữ đường dẫn src nếu bạn đang dùng thư mục src
  ],
  theme: {
    extend: {
      fontFamily: {
        // Trỏ class 'font-sans' mặc định về biến Roboto
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;