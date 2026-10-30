import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import NewsCard, { formatNewsDate } from "./NewsCard";
import { ArrowRight } from "./icons";
import { newsArticles } from "../data/news";

export default function NewsSection() {
  const homeStories = newsArticles.slice(0, 12);
  const newestDate = homeStories[0]?.publishedAt;

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
                Twelve illustrated stories from Enugu, Nigeria, Africa and around the world.
              </p>
            </div>
            <Link to="/news" className="btn btn-line w-fit">
              Browse news archive
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homeStories.map((article, index) => (
            <Reveal key={article.slug} delay={(index % 3) * 65}>
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>

        {newestDate && (
          <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
            Showing the 12 most recent stories · updated {formatNewsDate(newestDate)} · previous stories remain in the archive
          </p>
        )}
      </div>
    </section>
  );
}
