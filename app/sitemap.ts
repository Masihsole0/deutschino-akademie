import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://deutschino.ir",
      lastModified: new Date(),
    },
    {
      url: "https://deutschino.ir/courses",
      lastModified: new Date(),
    },
    {
      url: "https://deutschino.ir/about",
      lastModified: new Date(),
    },
  ];
}