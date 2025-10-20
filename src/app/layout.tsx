import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap", // Add this
  preload: true,
  weight: ["400", "500", "700"], // Specify needed weights only
});

export const metadata: Metadata = {
  title: "Samaradorlik ilovasi | Light SaaS",
  description:
    "Ish jarayonlarini soddalashtirish va maqsadlaringizga tezroq erishish uchun yaratilgan zamonaviy SaaS platforma.",
  keywords: ["samaradorlik", "ish jarayoni", "SaaS", "frontend", "motivatsiya"],
  authors: [{ name: "Sarvar Shukirlayev" }],
  openGraph: {
    title: "Samaradorlik ilovasi | Light SaaS",
    description:
      "O‘z muvaffaqiyatingizni kuzatish va rivojlanishingizni boshqarish uchun yaratilgan platforma.",
    type: "website",
    locale: "uz",
    siteName: "Light SaaS",
    url: "https://sizning-saytingiz.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
