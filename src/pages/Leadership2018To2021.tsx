import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { LEADERSHIP_2018_TO_2021 } from "../data/leadership2018To2021";

export default function Leadership2018To2021() {
  return (
    <>
      <PageHeader
        kicker="OSDA Administration"
        title={
          <>
            Chief Peter Ozoagu Leadership <span className="italic text-pine">2018–2021.</span>
          </>
        }
      />

      <section className="border-y border-ink/10 bg-sand/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP_2018_TO_2021.map((leader, index) => (
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
