import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata = {
  metadataBase: new URL("https://www.deutschino.ir"),
  title: "آکادمی دویچینو | آموزش زبان آلمانی در اصفهان |  B2 تا A1 کلاس",
  description:
  "آکادمی دویچینو با مدیریت مسیح سلیمانی در اصفهان؛ آموزش زبان آلمانی از سطح A1 تا B2 به‌صورت خصوصی و گروهی، آمادگی آزمون، مهاجرت، کار و تحصیل در آلمان.",
  
    alternates: {
    canonical: "/",
  },

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