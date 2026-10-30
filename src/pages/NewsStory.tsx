import { Link, Navigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { formatNewsDate } from "../components/NewsCard";
import { newsArticles } from "../data/news";

export default function NewsStory() {
  const { slug } = useParams();
  const articleIndex = newsArticles.findIndex((article) => article.slug === slug);
  const article = newsArticles[articleIndex];
  if (!article) return <Navigate to="/news" replace />;

  const olderArticle = newsArticles[articleIndex + 1];
  const newerArticle = newsArticles[articleIndex - 1];

  return (
    <>
      <PageHeader
        kicker={article.category}
        title={article.title}
        lede={article.excerpt}
      />
      <article className="mx-auto max-w-4xl px-6 pb-24 md:pb-32">
        <div className="flex flex-col gap-3 border-y border-ink/15 py-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-moss sm:flex-row sm:items-center sm:justify-between">
          <span>By {article.byline}</span>
          <time dateTime={article.publishedAt}>{formatNewsDate(article.publishedAt)}</time>
        </div>

        <div className="prose-osda mt-10 space-y-6 font-display text-lg leading-[1.9] text-ink/80 md:mt-14 md:text-xl">
          {article.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>

        <div className="mt-14 border-t border-ink/15 pt-7">
          <Link to="/news" className="link-sweep inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-pine">
            Back to all news
          </Link>
        </div>

        {(newerArticle || olderArticle) && (
          <nav aria-label="Browse other news stories" className="mt-10 grid gap-5 border-t border-ink/15 pt-7 sm:grid-cols-2">
            {newerArticle ? (
              <Link to={`/news/${newerArticle.slug}`} className="group border border-ink/10 bg-paper p-5 transition-colors hover:border-pine/40">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">Newer story</span>
                <span className="mt-3 block font-display text-lg font-semibold leading-tight text-ink group-hover:text-pine">{newerArticle.title}</span>
              </Link>
            ) : <span />}
            {olderArticle && (
              <Link to={`/news/${olderArticle.slug}`} className="group border border-ink/10 bg-paper p-5 transition-colors hover:border-pine/40 sm:text-right">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">Older story</span>
                <span className="mt-3 block font-display text-lg font-semibold leading-tight text-ink group-hover:text-pine">{olderArticle.title}</span>
              </Link>
            )}
          </nav>
        )}
      </article>
    </>
  );
}
