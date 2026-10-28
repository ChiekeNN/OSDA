import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { ArrowRight } from "../components/icons";
import { OGHE_HISTORY_ORIGIN, OGHE_SONS, OGHE_VILLAGE_HISTORY } from "../data/historyOfOghe";

export default function HistoryOfOghe() {
  return (
    <>
      <PageHeader
        kicker="Our roots"
        title={
          <>
            History of <span className="italic text-pine">Oghe.</span>
          </>
        }
      />

      <section className="border-y border-ink/10 bg-paper py-16 md:py-24">
        <article className="mx-auto max-w-4xl px-6 text-base leading-[1.85] text-ink/70 md:text-lg">
          <p>
            Oghe the second son of Ezeagu settled at the OLIE-OGHE and married MGBO OLIE, also from Okpogho. Mgbo-Olie lived with Oghe for several years without a male child; however, she later had three sons, namely:
          </p>

          <div className="my-9 space-y-4 border-l-2 border-gold bg-sand/55 px-6 py-6 md:px-8">
            {OGHE_SONS.map((son) => (
              <p key={son.name}>
                <strong className="font-semibold text-ink">{son.name}</strong> {son.meaning}.
              </p>
            ))}
          </div>

          <div className="space-y-6">
            {OGHE_HISTORY_ORIGIN.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 space-y-14 md:mt-20 md:space-y-16">
            {OGHE_VILLAGE_HISTORY.map((village) => (
              <section key={village.title} className="scroll-mt-28 border-t border-ink/15 pt-8">
                <h2 className="mb-5 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  {village.title}
                </h2>
                <div className="space-y-6">
                  {village.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <Link
            to="/about"
            className="link-sweep mt-16 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-pine"
          >
            Back to About OSDA
            <ArrowRight className="h-4 w-4" />
          </Link>
        </article>
      </section>
    </>
  );
}
