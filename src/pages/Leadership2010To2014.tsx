import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { LEADERSHIP_2010_TO_2014 } from "../data/leadership2010To2014";

export default function Leadership2010To2014() {
  return (
    <>
      <PageHeader
        kicker="OSDA Administration"
        title={
          <>
            OSDA Leadership <span className="italic text-pine">2010–2014.</span>
          </>
        }
        lede="The officers and representatives recorded for OSDA’s 2010 to 2014 leadership cycle."
      />

      <section className="border-y border-ink/10 bg-sand/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-ink/10 pb-8">
              <p className="eyebrow">Leadership cycle</p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/70">
                The supplied PDF names Engr Chief Gregory Nwafor as President and Engr Chief Obiora Ezeoha as Vice President, and lists the additional offices below.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP_2010_TO_2014.map((leader, index) => (
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
                        The source document does not clearly provide a name or portrait for this office.
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ink/45">
            Names, offices, and portraits are transcribed from the supplied PDF. The Financial Secretary’s label appears without a clearly associated name or portrait in the document.
          </p>
        </div>
      </section>
    </>
  );
}
