import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata = {
  title: "دویچینو | آموزش زبان آلمانی | بهترین مدرس زبان آلمانی اصفهان",
  description:
    "آکادمی دویچینو با مدیریت مسیح سلیمانی؛ آموزش زبان آلمانی از A1 تا B2، کلاس خصوصی و گروهی، آمادگی آزمون، مهاجرت، کار و تحصیل در آلمان.",
  keywords: [
    "زبان آلمانی",
    "زبان المانی",
    "مدرس آلمانی",
    "مدرس زبان آلمانی",
    "بهترین مدرس زبان آلمانی",
    "دویچینو",
    "مدرس آلمانی اصفهان",
    "بهترین مدرس آلمانی اصفهان",
    "آکادمی دویچینو",
    "آلمانی",
    "المانی",
    "موسسه آلمانی",
    "موسسه المانی",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={vazir.className}>{children}</body>
    </html>
  );
}