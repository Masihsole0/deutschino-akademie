
import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { organizationSchema } from "./schema";

const vazir = Vazirmatn({
  subsets: ["arabic"],
});

const siteTitle =
  "آموزش زبان آلمانی در اصفهان | مسیح سلیمانی و آکادمی دویچینو";

const siteDescription =
  "آموزش زبان آلمانی در اصفهان و آنلاین با مسیح سلیمانی و آکادمی دویچینو؛ کلاس‌های A1، A2، B1 و B2، آموزش گرامر آلمانی، مکالمه و کلاس‌های خصوصی و گروهی متناسب با هدف زبان‌آموز.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deutschino.ir"),

  title: siteTitle,
  description: siteDescription,

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

  keywords: [
    "آموزش زبان آلمانی اصفهان",
    "مدرس زبان آلمانی اصفهان",
    "مسیح سلیمانی",
    "مدرس زبان آلمانی مسیح سلیمانی",
    "کلاس زبان آلمانی در اصفهان",
    "کلاس خصوصی زبان آلمانی",
    "کلاس آنلاین زبان آلمانی",
    "آکادمی دویچینو",
    "دوره زبان آلمانی A1",
    "دوره زبان آلمانی A2",
    "دوره زبان آلمانی B1",
    "دوره زبان آلمانی B2",
    "آموزش گرامر زبان آلمانی",
    "گرامر آلمانی از پایه",
    "کلاس مکالمه آلمانی",
  ],

  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "آکادمی دویچینو",
    title: siteTitle,
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/mee.jpg",
        alt: "مسیح سلیمانی، مدرس زبان آلمانی در آکادمی دویچینو",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/mee.jpg",
        alt: "مسیح سلیمانی، مدرس زبان آلمانی در آکادمی دویچینو",
      },
    ],
  },
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
