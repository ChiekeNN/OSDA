import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { BOARD_SECRETARY, TRUSTEES } from "../data/osdaAdministration";

function TrusteeCard({
  community,
  name,
  role,
  image,
}: {
  community: string;
  name?: string;
  role: string;
  image?: string;
}) {
  return (
    <article className="h-full overflow-hidden border border-ink/10 bg-paper transition-transform duration-300 hover:-translate-y-1">
      {image ? (
        <img
          src={image}
          alt={`Portrait of ${name}`}
          loading="lazy"
          className="h-72 w-full bg-sand object-cover object-center"
        />
      ) : (
        <div
          aria-label="No portrait provided for the Owe representative"
          className="flex h-72 items-center justify-center bg-sand font-display text-5xl font-semibold text-pine/40"
        >
          {community.slice(0, 1).toUpperCase()}
        </div>
      )}
      <div className="p-6">
        <p className="eyebrow">{community}</p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
          {name ?? "Member representative"}
        </h3>
        <p className="mt-2 text-sm font-medium text-pine">{role}</p>
        {!name && (
          <p className="mt-3 text-xs leading-relaxed text-ink/50">
            Name and portrait not provided.
          </p>
        )}
      </div>
    </article>
  );
}

export default function BoardOfTrustees() {
  return (
    <>
      <PageHeader
        kicker="OSDA Administration"
        title={
          <>
            Board of <span className="italic text-pine">Trustees.</span>
          </>
        }
        lede="Representatives from the communities of Oghe."
      />

      <section className="border-y border-ink/10 bg-sand/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="max-w-4xl text-lg leading-relaxed text-ink/70 md:text-xl">
              The association has a representative from each community that makes up Oghe Town as a member of the Board of Trustee. The communities are Owe, Akama, Amankwo, Amansiodo, Neke, Oyofo, and Iwollo.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRUSTEES.map((trustee, index) => (
              <Reveal key={trustee.community} delay={(index % 3) * 90}>
                <TrusteeCard {...trustee} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal>
          <p className="eyebrow">Board leadership</p>
          <div className="mt-7 grid overflow-hidden border border-ink/10 bg-forest text-cream md:grid-cols-12">
            <div className="md:col-span-4">
              <img
                src={BOARD_SECRETARY.image}
                alt={`Portrait of ${BOARD_SECRETARY.name}`}
                loading="lazy"
                className="h-72 w-full object-cover object-center md:h-full"
              />
            </div>
            <div className="flex flex-col justify-center px-7 py-9 md:col-span-8 md:px-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                {BOARD_SECRETARY.role}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                {BOARD_SECRETARY.name}
              </h2>
              <p className="mt-4 text-sm text-cream/60">Board of Trustee</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
