export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "EducationalOrganization",
      "name": "آکادمی دویچینو",
      "alternateName": "Deutschino Akademie",
      "url": "https://www.deutschino.ir",
      "logo": "https://www.deutschino.ir/logo.png",
      "description":
        "آموزش زبان آلمانی در اصفهان به صورت خصوصی و گروهی برای مهاجرت، کار، تحصیل و آمادگی آزمون.",
      
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "اصفهان",
        "addressCountry": "IR"
      },

      "founder": {
        "@type": "Person",
        "name": "مسیح سلیمانی"
      }
    },


    {
      "@type": "Person",
      "name": "مسیح سلیمانی",
      "jobTitle": "مدرس زبان آلمانی",
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "آکادمی دویچینو"
      }
    },


    {
      "@type": "Course",
      "name": "دوره آموزش زبان آلمانی A1 تا B2",
      "description":
        "آموزش زبان آلمانی از سطح مبتدی تا پیشرفته برای مهاجرت، تحصیل، کار و آمادگی آزمون‌های بین‌المللی.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "آکادمی دویچینو",
        "url": "https://www.deutschino.ir"
      }
    }

  ]
};