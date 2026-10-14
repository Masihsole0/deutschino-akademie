const websiteUrl = "https://www.deutschino.ir";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${websiteUrl}/#organization`,
      name: "آکادمی دویچینو",
      alternateName: "Deutschino Akademie",
      url: websiteUrl,
      logo: `${websiteUrl}/logo.jpg`,
      description:
        "آموزش زبان آلمانی در اصفهان به صورت خصوصی و گروهی برای مهاجرت، کار، تحصیل و آمادگی آزمون.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "اصفهان",
        addressCountry: "IR",
      },
      founder: {
        "@id": `${websiteUrl}/#instructor`,
      },
    },
    {
      "@type": "Person",
      "@id": `${websiteUrl}/#instructor`,
      name: "مسیح سلیمانی",
      jobTitle: "مدرس زبان آلمانی",
      worksFor: {
        "@id": `${websiteUrl}/#organization`,
      },
    },
    {
      "@type": "Course",
      "@id": `${websiteUrl}/#german-courses`,
      name: "دوره‌های آموزش زبان آلمانی",
      description:
        "دوره‌های آموزش زبان آلمانی در سطوح مختلف برای تقویت مهارت‌های زبانی و آمادگی آزمون.",
      provider: {
        "@id": `${websiteUrl}/#organization`,
      },
    },
  ],
};