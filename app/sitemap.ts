
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.deutschino.ir";

  const pages = [
    "/",
    "/courses/a1",
    "/courses/a2",
    "/courses/b1",
    "/courses/b2",
    "/courses/grammar",
    "/courses/conversation",
    "/blog",
    "/blog/learn-german-from-zero",
    "/blog/how-long-to-learn-german",
    "/blog/best-german-learning-resources",
    "/blog/german-levels-a1-b2",
    "/blog/german-b1-exam-preparation",
    "/blog/learn-german-for-immigration",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));
}
