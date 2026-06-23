import type { MetadataRoute } from "next";
import { absoluteUrl, siteRoutes } from "@/lib/site";
import { blogArticles } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...siteRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogArticles.map((article) => ({
      url: absoluteUrl(`/blog/${article.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.72,
      images: [absoluteUrl(article.poster)],
      videos: [
        {
          title: article.title,
          thumbnail_loc: absoluteUrl(article.poster),
          description: article.description,
        },
      ],
    })),
  ];
}
