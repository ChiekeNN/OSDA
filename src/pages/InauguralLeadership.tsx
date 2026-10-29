import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { INAUGURAL_LEADERSHIP } from "../data/inauguralLeadership";

export default function InauguralLeadership() {
  return (
    <>
      <PageHeader
        kicker="OSDA Administration"
        title={
          <>
            Inaugural Leadership <span className="italic text-pine">of OSDA.</span>
          </>
        }
      />

      <section className="border-y border-ink/10 bg-sand/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 border-b border-ink/10 pb-10">
              <div>
                <p className="eyebrow">The first leadership cycle</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  1996 <span className="italic text-pine">—</span> 2006
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INAUGURAL_LEADERSHIP.map((leader, index) => (
              <Reveal key={leader.role} delay={(index % 3) * 80}>
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
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                      {leader.name ?? "Name not provided"}
                    </h3>
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
