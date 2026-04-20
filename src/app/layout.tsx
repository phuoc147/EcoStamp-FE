import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/src/providers";
import "./globals.css";

// 1. Khởi tạo font Roboto
const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ['100', '300', '400', '500', '700', '900'], // Bắt buộc phải có với Roboto
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "EcoStamp",
  description: "Production-grade frontend skeleton with mock auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${roboto.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      {/* 2. Class font-sans ở đây sẽ tự động ăn theo biến --font-roboto */}
      <body className="font-sans bg-[#f5fae4] text-gray-800 flex justify-center">
        <Providers>
          <div className="w-full bg-[#f4faec] min-h-screen relative shadow-lg overflow-x-hidden" style={{ maxWidth: 430 }}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}