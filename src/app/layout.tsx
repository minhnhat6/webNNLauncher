import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  variable: "--font-poppins",
  display: "swap",
  src: [
    { path: "../../public/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/fonts/poppins-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../../public/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/fonts/poppins-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../../public/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/fonts/poppins-600-latin.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "Tạo Shorts cuốn hút bằng AI",
  description:
    "Biến video dài thành Shorts cuốn hút với AI tự chọn khoảnh khắc, chuyển khung dọc và tạo caption tự động.",
  icons: {
    icon: "/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/seo/favicon.ico",
    apple: "/sites/pro-ui-layouts-com-f03df40c/preview--streamline-hero-ff212995/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
