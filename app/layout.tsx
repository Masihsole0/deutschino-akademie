import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { organizationSchema } from "./schema";

const vazir = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deutschino.ir"),

  title: "آکادمی دویچینو | آموزش زبان آلمانی در اصفهان",

  description:
    "آکادمی دویچینو با مدیریت مسیح سلیمانی در اصفهان؛ آموزش زبان آلمانی از مبتدی تا پیشرفته، کلاس‌های خصوصی و گروهی، آمادگی آزمون‌های بین‌المللی، مهاجرت، کار و تحصیل در آلمان.",

  applicationName: "آکادمی دویچینو",

authors: [
  {
    name: "مسیح سلیمانی",
    url: "https://www.deutschino.ir",
  },
],

creator: "مسیح سلیمانی",

publisher: "آکادمی دویچینو",

robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
    alternates: {
    canonical: "/",
  },

  keywords: [
    "آموزش زبان آلمانی",
    "زبان آلمانی",
    "زبان المانی",
    "مدرس زبان آلمانی",
    "مدرس آلمانی",
    "بهترین مدرس زبان آلمانی",
    "آکادمی دویچینو",
    "دویچینو",
    "آموزش زبان آلمانی اصفهان",
    "مدرس زبان آلمانی اصفهان",
    "بهترین مدرس آلمانی اصفهان",
    "کلاس زبان آلمانی",
    "کلاس خصوصی آلمانی",
    "کلاس گروهی آلمانی",
    "آزمون گوته",
    "مهاجرت به آلمان",
    "تحصیل در آلمان",
    "کار در آلمان",
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
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />

  {children}

</body>
    </html>
  );
}