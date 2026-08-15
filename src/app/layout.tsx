import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  title: "Streamline Hero | UI Layouts Pro",
  description: "Build amazing products faster with UI-Layouts Pro.",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
