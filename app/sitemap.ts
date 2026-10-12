import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.deutschino.ir",
      lastModified: new Date(),
    },
    {
      url: "https://www.deutschino.ir/courses/a1",
      lastModified: new Date(),
    },
    {
      url: "https://www.deutschino.ir/courses/a2",
      lastModified: new Date(),
    },
    {
      url: "https://www.deutschino.ir/courses/b1",
      lastModified: new Date(),
    },
    {
      url: "https://www.deutschino.ir/courses/conversation",
      lastModified: new Date(),
    },
  ];
}