import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import NewsCard, { formatNewsDate } from "../components/NewsCard";
import Reveal from "../components/Reveal";
import { NEWS_CATEGORIES, latestEditionArticles, latestEditionDate, newsArticles, type NewsCategory } from "../data/news";

export default function News() {
  const [category, setCategory] = useState<NewsCategory | "All news">("All news");
  const [query, setQuery] = useState("");
  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return newsArticles.filter((article) => {
      const categoryMatches = category === "All news" || article.category === category;
      const queryMatches = !normalizedQuery || [article.title, article.excerpt, article.category]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
      return categoryMatches && queryMatches;
    });
  }, [category, query]);

  return (
    <>
      <PageHeader
        kicker="OSDA Newsroom"
        title={<>News &amp; <span className="italic text-pine">updates.</span></>}
        lede="Read the latest stories from Enugu, Nigeria, Africa and around the world. Every article is published on this platform by OSDA News Correspondence."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32" aria-labelledby="news-archive-heading">
        <Reveal>
          <div className="flex flex-col gap-6 border-y border-ink/15 py-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Latest edition · {formatNewsDate(latestEditionDate)}</p>
              <h2 id="news-archive-heading" className="mt-4 font-display text-3xl font-semibold text-ink md:text-4xl">
                News archive
              </h2>
              <p className="mt-2 text-sm text-ink/55">
                {latestEditionArticles.length} stories in the latest edition · {newsArticles.length} full stories archived
              </p>
            </div>
            <label className="block w-full md:max-w-sm">
              <span className="sr-only">Search news</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search headlines and summaries"
                className="w-full border border-ink/20 bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-pine"
              />
            </label>
          </div>
        </Reveal>

        <div className="mt-7 flex flex-wrap gap-2" aria-label="Filter news by category">
          {(["All news", ...NEWS_CATEGORIES] as const).map((item) => {
            const selected = category === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={selected}
                className={`border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${selected ? "border-pine bg-pine text-cream" : "border-ink/20 text-ink/60 hover:border-pine hover:text-pine"}`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {filteredArticles.length ? (
          <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <Reveal key={article.slug} delay={(index % 3) * 70}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-dashed border-ink/20 p-8 text-center">
            <p className="font-display text-xl font-semibold text-ink">No stories found</p>
            <p className="mt-2 text-sm text-ink/60">Try a different search term or category.</p>
            <button
              type="button"
              onClick={() => { setQuery(""); setCategory("All news"); }}
              className="btn btn-line mt-5"
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="mt-16 border-t border-ink/15 pt-6 text-sm text-ink/55">
          <p>Stories are published in full on the OSDA platform and credited to OSDA News Correspondence.</p>
          <Link to="/" className="link-sweep mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-pine">
            Return to home
          </Link>
        </div>
      </section>
    </>
  );
}
