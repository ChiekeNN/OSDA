import rawArticles from "./news.json";

export type NewsCategory = "Enugu & Region" | "Nigeria" | "Africa" | "World";

export type NewsArticle = {
  slug: string;
  title: string;
  category: NewsCategory;
  publishedAt: string;
  byline: "OSDA News Correspondence";
  excerpt: string;
  body: string[];
};

export const NEWS_CATEGORIES: NewsCategory[] = ["Enugu & Region", "Nigeria", "Africa", "World"];

export const newsArticles = (rawArticles as NewsArticle[]).sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);
export const latestEditionDate = newsArticles[0]?.publishedAt ?? "";
export const latestEditionArticles = newsArticles.filter((article) => article.publishedAt === latestEditionDate);
