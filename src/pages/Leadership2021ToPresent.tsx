import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { LEADERSHIP_2021_TO_PRESENT } from "../data/leadership2021ToPresent";

export default function Leadership2021ToPresent() {
  return (
    <>
      <PageHeader
        kicker="OSDA Administration"
        title={
          <>
            Gerald Aniamalu Leadership <span className="italic text-pine">2021–Present.</span>
          </>
        }
        lede="The officers and representatives recorded for OSDA’s leadership cycle beginning in 2021."
      />

      <section className="border-y border-ink/10 bg-sand/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-ink/10 pb-8">
              <p className="eyebrow">Leadership cycle · 2021 to date</p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/70">
                The supplied PDF identifies Gerald Aniamalu as President and Chief Uche Chiude as Vice President, and lists the officers below. The source describes the leadership period as “2021 till date.”
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP_2021_TO_PRESENT.map((leader, index) => (
              <Reveal key={leader.id} delay={(index % 3) * 80}>
                <article className="h-full overflow-hidden border border-ink/10 bg-paper transition-transform duration-300 hover:-translate-y-1">
                  <img
                    src={leader.image}
                    alt={`Portrait of ${leader.name}`}
                    loading="lazy"
                    className="h-72 w-full bg-sand object-cover object-center"
                  />
                  <div className="p-6">
                    <p className="eyebrow">{leader.role}</p>
                    <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                      {leader.name}
                    </h2>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
