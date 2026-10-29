import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { LEADERSHIP_2014_TO_2018 } from "../data/leadership2014To2018";

export default function Leadership2014To2018() {
  return (
    <>
      <PageHeader
        kicker="OSDA Administration"
        title={
          <>
            OSDA Leadership <span className="italic text-pine">2014–2018.</span>
          </>
        }
        lede="The officers and representatives recorded for OSDA’s 2014 to 2018 leadership cycle."
      />

      <section className="border-y border-ink/10 bg-sand/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-ink/10 pb-8">
              <p className="eyebrow">Leadership cycle</p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/70">
                The supplied PDF names Chief Kenneth Ezeekwu as President and Barr Chief Peter Ozoagu as Vice President, and records the additional officers and roles below.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP_2014_TO_2018.map((leader, index) => (
              <Reveal key={leader.id} delay={(index % 3) * 80}>
                <article className="h-full overflow-hidden border border-ink/10 bg-paper transition-transform duration-300 hover:-translate-y-1">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={`Portrait of ${leader.name}`}
                      loading="lazy"
                      className="h-72 w-full bg-sand object-cover object-center"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="flex h-72 items-center justify-center bg-forest/5 font-display text-6xl font-semibold text-pine/35"
                    >
                      {leader.role.slice(0, 1)}
                    </div>
                  )}
                  <div className="p-6">
                    <p className="eyebrow">{leader.role}</p>
                    <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                      {leader.name ?? "Name not listed in the source document"}
                    </h2>
                    {!leader.image && (
                      <p className="mt-3 text-xs leading-relaxed text-ink/50">
                        {leader.name
                          ? "The source document does not include a portrait for this officer."
                          : "The source document does not list a name or portrait for this office."}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ink/45">
            Names, roles, and portraits are transcribed from the supplied PDF. Where a role has no associated name or portrait in the document, that information is left unspecified.
          </p>
        </div>
      </section>
    </>
  );
}
