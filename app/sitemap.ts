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
      url: "https://deutschino.ir/courses/a1",
      lastModified: new Date(),
    },
    {
      url: "https://deutschino.ir/courses/a2",
      lastModified: new Date(),
    },
    {
      url: "https://deutschino.ir/courses/b1",
      lastModified: new Date(),
    },
    {
      url: "https://deutschino.ir/courses/conversation",
      lastModified: new Date(),
    },
    {
      url: "https://deutschino.ir/about",
      lastModified: new Date(),
    },
  ];
}