
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
      "@type": "EducationalOrganization",
      "@id": `${websiteUrl}/#organization`,
      name: "آکادمی دویچینو",
      alternateName: "Deutschino Akademie",
      url: websiteUrl,
      description:
        "آموزش زبان آلمانی در اصفهان و آنلاین با مسیح سلیمانی؛ برگزاری کلاس‌های خصوصی و گروهی، آموزش گرامر و مکالمه و دوره‌های زبان آلمانی از سطح A1 تا B2.",
      logo: {
        "@type": "ImageObject",
        url: `${websiteUrl}/logo.jpg`,
      },
      image: {
        "@type": "ImageObject",
        url: `${websiteUrl}/mee.jpg`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "اصفهان",
        addressCountry: "IR",
      },
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
      jobTitle: "مدرس زبان آلمانی",
      worksFor: {
        "@id": `${websiteUrl}/#organization`,
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
