const websiteUrl = "https://www.deutschino.ir";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${websiteUrl}/#website`,
      name: "آکادمی دویچینو",
      alternateName: "Deutschino Akademie",
      url: websiteUrl,
      inLanguage: "fa-IR",
      publisher: {
        "@id": `${websiteUrl}/#organization`,
      },
    },
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${websiteUrl}/#organization`,
      name: "آکادمی دویچینو",
      alternateName: "Deutschino Akademie",
      url: websiteUrl,
      description:
        "آموزش زبان آلمانی در اصفهان و آنلاین با مسیح سلیمانی؛ کلاس‌های خصوصی و گروهی، آموزش گرامر و مکالمه و دوره‌های A1 تا B2.",
      priceRange: "متوسط",
      logo: {
        "@type": "ImageObject",
        url: `${websiteUrl}/logo.jpg`,
      },
      image: {
        "@type": "ImageObject",
        url: `${websiteUrl}/mee.jpg`,
      },
      telephone: "+989130061984",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "خیابان حکیم نظامی، بعد از چهارراه نظر، میدان کوچک ۱۰، بالای کافه قهوینه",
        addressLocality: "اصفهان",
        addressRegion: "اصفهان",
        addressCountry: "IR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.635704,
        longitude: 51.653748,
      },
      hasMap:
        "https://www.google.com/maps/dir/?api=1&destination=32.635704%2C51.653748",
      employee: {
        "@id": `${websiteUrl}/#instructor`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "اصفهان",
        },
        {
          "@type": "Country",
          name: "ایران",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+989130061984",
        contactType: "customer service",
        availableLanguage: ["Persian", "German"],
      },
    },
    {
      "@type": "Person",
      "@id": `${websiteUrl}/#instructor`,
      name: "مسیح سلیمانی",
      alternateName: "Masih Soleimani",
      url: websiteUrl,
      image: {
        "@type": "ImageObject",
        url: `${websiteUrl}/mee.jpg`,
      },
      description:
        "مدرس زبان آلمانی و مدیر آکادمی دویچینو در اصفهان؛ برگزارکننده کلاس‌های حضوری و آنلاین زبان آلمانی از سطح A1 تا B2.",
      jobTitle: "مدرس زبان آلمانی و مدیر آکادمی دویچینو",
      worksFor: {
        "@id": `${websiteUrl}/#organization`,
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "telc Deutsch B2",
        credentialCategory: "Language proficiency certificate",
      },
      knowsAbout: [
        "آموزش زبان آلمانی",
        "گرامر زبان آلمانی",
        "مکالمه زبان آلمانی",
        "آموزش زبان آلمانی سطح A1",
        "آموزش زبان آلمانی سطح A2",
        "آموزش زبان آلمانی سطح B1",
        "آموزش زبان آلمانی سطح B2",
      ],
    },
  ],
};