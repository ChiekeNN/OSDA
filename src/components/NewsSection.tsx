import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import NewsCard, { formatNewsDate } from "./NewsCard";
import { ArrowRight } from "./icons";
import { latestEditionArticles, latestEditionDate } from "../data/news";

export default function NewsSection() {
  const featuredStories = latestEditionArticles.slice(0, 4);
  const editionDate = latestEditionDate;

  return (
    <section id="latest-news" className="border-y border-ink/10 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">OSDA News Correspondence</p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
                News from home <span className="italic text-pine">and beyond.</span>
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink/60">
                Read the latest stories from Enugu, Nigeria, Africa and around the world.
              </p>
            </div>
            <Link to="/news" className="btn btn-line w-fit">
              Latest edition · {latestEditionArticles.length} stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredStories.map((article, index) => (
            <Reveal key={article.slug} delay={index * 70}>
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>

        {editionDate && (
          <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
            Latest edition · {formatNewsDate(editionDate)}
          </p>
        )}
      </div>
    </section>
  );
}
