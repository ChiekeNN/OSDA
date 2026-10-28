import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { ArrowRight } from "../components/icons";
import HISTORY_OF_OSDA from "../data/history";

export default function HistoryOfOsda() {
  return (
    <>
      <PageHeader
        kicker="About OSDA"
        title={
          <>
            History of <span className="italic text-pine">OSDA.</span>
          </>
        }
      />

      <section className="border-y border-ink/10 bg-paper py-16 md:py-24">
        <article className="mx-auto max-w-4xl px-6 text-base leading-[1.85] text-ink/70 md:text-lg">
          <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            HISTORY OF OGHE SOCIAL DEVELOPMENT ASSOCIATION ABUJA (OSDA) AND AKU RUO UNO PHILLOSOPHY
          </h2>
          <p className="mb-10 mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
            BY GERALD ONYEKACHI EZE
          </p>
          <div className="space-y-6">
            {HISTORY_OF_OSDA.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
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
