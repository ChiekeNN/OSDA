import { Link } from "react-router-dom";
import type { NewsArticle } from "../data/news";
import { ArrowUpRight } from "./icons";

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col border-t border-ink/15 py-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">
        <span>{article.category}</span>
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
        <time dateTime={article.publishedAt}>{formatNewsDate(article.publishedAt)}</time>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-pine md:text-[1.7rem]">
        <Link to={`/news/${article.slug}`} className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
          {article.title}
        </Link>
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">{article.excerpt}</p>
      <Link
        to={`/news/${article.slug}`}
        className="link-sweep mt-6 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine"
        aria-label={`Read full story: ${article.title}`}
      >
        Read full story <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
