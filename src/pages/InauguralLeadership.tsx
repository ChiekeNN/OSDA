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
        lede="Honouring the first leadership team that guided OSDA from 1996 to 2006."
      />

      <section className="border-y border-ink/10 bg-sand/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-12 grid gap-6 border-b border-ink/10 pb-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="eyebrow">The first leadership cycle</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  1996 <span className="italic text-pine">—</span> 2006
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-ink/65 md:col-span-5 md:text-base">
                The source document records that OSDA began its leadership in 1996 with Engr Chief Nicolas Nzewigbo, a career civil servant in the Federal Capital Territory, Abuja. It describes this inaugural team as serving through 2006.
              </p>
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
                      {leader.name ?? "Name not listed in the source document"}
                    </h3>
                    {!leader.image && (
                      <p className="mt-3 text-xs leading-relaxed text-ink/50">
                        {leader.name
                          ? "The source document does not include a portrait for this leader."
                          : "The source document does not provide a name or portrait for this office."}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ink/45">
            The supplied PDF notes that OSDA had produced six leadership cycles to date. This page presents the inaugural 1996–2006 cycle and retains the names, offices, and portraits provided in that document.
          </p>
        </div>
      </section>
    </>
  );
}
