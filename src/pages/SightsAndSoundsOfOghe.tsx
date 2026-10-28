import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function SightsAndSoundsOfOghe() {
  return (
    <>
      <PageHeader
        kicker="Discover Oghe"
        title={
          <>
            Sights and Sounds <span className="italic text-pine">of Oghe.</span>
          </>
        }
      />

      <section className="border-y border-ink/10 bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <figure className="mx-auto max-w-[260px] overflow-hidden border border-ink/10 bg-sand shadow-[10px_10px_0_0_var(--color-goldsoft)]">
              <img
                src="/images/sights-and-sounds-oghe.jpg"
                alt="A costumed masquerade performer with a tall decorated structure, surrounded by onlookers."
                className="block h-auto w-full"
                loading="lazy"
              />
              <figcaption className="bg-forest px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/75">
                Cultural life in Oghe
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <article className="relative overflow-hidden border border-ink/10 bg-forest px-7 py-10 text-cream shadow-[10px_10px_0_0_var(--color-goldsoft)] md:px-14 md:py-14">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-dashed border-cream/15"
              />
              <div className="relative space-y-6 font-display text-xl leading-relaxed text-cream/85 md:text-2xl">
                <p>
                  Oghe communities are mainly agrarian and are also endowed with various natural resources.
                </p>
                <p>
                  The Oghe community supports the Enugu State and Federal Government economies through agricultural products and solid minerals, and engages in agricultural activities.
                </p>
                <p className="border-l-2 border-gold pl-5 text-gold md:pl-7">
                  Coal and other solid minerals are abundant in Oghe town.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
