import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { ArrowRight } from "../components/icons";
import HISTORY_OF_EZEAGU from "../data/historyOfEzeagu";

const sectionId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function HistoryOfEzeagu() {
  return (
    <>
      <PageHeader
        kicker="History and heritage"
        title={
          <>
            History of <span className="italic text-pine">Ezeagu.</span>
          </>
        }
      />

      <section className="border-y border-ink/10 bg-paper py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:gap-14">
          <nav
            aria-label="Sections in the History of Ezeagu"
            className="h-fit border border-ink/10 bg-cream p-6 lg:sticky lg:top-32 lg:col-span-3"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-moss">
              In this history
            </p>
            <ul className="mt-4 space-y-2">
              {HISTORY_OF_EZEAGU.map((section) => (
                <li key={section.title}>
                  <Link
                    to={`/about/history-of-ezeagu#${sectionId(section.title)}`}
                    className="link-sweep text-sm text-ink/65 transition-colors hover:text-pine"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <article className="min-w-0 lg:col-span-9">
            <figure className="mb-10 max-w-[320px] overflow-hidden border border-ink/10 bg-cream shadow-[8px_8px_0_0_var(--color-goldsoft)]">
              <img
                src="/images/history-of-ezeagu.jpg"
                alt="A photo of two seated sculptures shown on the opening page of the supplied history document."
                className="block h-auto w-full"
                loading="lazy"
              />
            </figure>
            {HISTORY_OF_EZEAGU.map((section, index) => (
              <section
                id={sectionId(section.title)}
                key={section.title}
                className={`scroll-mt-28 py-8 md:py-10 ${index > 0 ? "border-t border-ink/15" : "pt-0"}`}
              >
                <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-5 text-base leading-[1.85] text-ink/70 md:text-lg">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <Link
              to="/about"
              className="link-sweep mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-pine"
            >
              Back to About OSDA
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
