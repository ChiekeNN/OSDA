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
      />

      <section className="border-y border-ink/10 bg-sand/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
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
                      {leader.name ?? "Name not provided"}
                    </h2>
                    {!leader.image && (
                      <p className="mt-3 text-xs leading-relaxed text-ink/50">
                        {leader.name
                          ? "Portrait not provided."
                          : "Name and portrait not provided."}
                      </p>
                    )}
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
