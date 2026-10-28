import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { ArrowRight, ArrowUpRight, ObjectiveIcon } from "../components/icons";
import { IMAGES, OBJECTIVES, ORG, PILLARS } from "../data/content";
import HISTORY_OF_OSDA from "../data/history";

function Story() {
  return (
    <section id="about-osda" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24 md:pb-32">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">About OSDA</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink md:text-5xl">
              Oghe Social <span className="italic text-pine">Development Association.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-lg leading-relaxed text-ink/75">
              The acronym OSDA is: <strong className="font-semibold text-ink">Oghe Social Development Association.</strong>
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={150}>
            <div className="relative ml-auto max-w-lg">
              <div className="overflow-hidden border border-ink/10 shadow-[14px_14px_0_0_var(--color-goldsoft)]">
                <img
                  src={IMAGES.aboutStory.src}
                  alt={IMAGES.aboutStory.alt}
                  loading="lazy"
                  className="h-[380px] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105 md:h-[440px]"
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink/45">
                Enterprise begins where a market begins.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function History() {
  return (
    <section id="history-of-osda" className="scroll-mt-28 border-y border-ink/10 bg-sand/65 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-36">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink md:text-5xl">
              History <span className="italic text-pine">of OSDA.</span>
            </h2>
            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
              By Gerald Onyekachi Eze
            </p>
          </div>
        </div>
        <article className="space-y-6 text-base leading-[1.85] text-ink/70 lg:col-span-8">
          {HISTORY_OF_OSDA.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision-statement" className="relative scroll-mt-28 overflow-hidden bg-forest text-cream">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-dashed border-cream/15"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-28">
        <Reveal>
          <p className="eyebrow text-gold!">Vision Statement</p>
        </Reveal>
        <Reveal delay={140}>
          <blockquote className="mt-9 font-display text-2xl font-medium leading-[1.35] tracking-tight text-cream md:text-4xl">
            <span aria-hidden className="mr-3 align-top text-5xl leading-none text-gold md:text-6xl">
              “
            </span>
            {ORG.vision}
            <span aria-hidden className="ml-1 align-top text-5xl leading-none text-gold md:text-6xl">
              ”
            </span>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission-statement" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">Mission Statement</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink md:text-5xl">
              Two fires,
              <br />
              <span className="italic text-gold">one flame.</span>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-ink/60">
              Everything OSDA does is carried by two commitments — to the
              community as a whole, and to the young people who will inherit
              it.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          {ORG.mission.map((m, i) => (
            <Reveal key={m.title} delay={i * 140}>
              <article className="group border-l-2 border-gold pl-7 transition-colors duration-300 hover:border-pine">
                <span className="font-display text-3xl italic text-ink/25 transition-colors duration-300 group-hover:text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                  {m.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink/65">{m.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Motto() {
  return (
    <section id="osda-motto" className="scroll-mt-28 border-y border-ink/10 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">OSDA Motto</p>
        </Reveal>
        <div className="mt-10 space-y-4 md:space-y-6">
          {ORG.motto.map((phrase, i) => (
            <Reveal key={phrase} delay={i * 130}>
              <p
                style={{ marginLeft: `${i * 4}%` }}
                className={`font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl ${
                  i === 2 ? "italic text-gold" : i % 2 === 1 ? "text-pine" : "text-ink"
                }`}
              >
                {phrase}
                <span className="text-gold">{i === ORG.motto.length - 1 ? "." : ","}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objectives() {
  return (
    <section id="osda-objectives" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 md:py-32">
      <Reveal>
        <p className="eyebrow">OSDA Objectives</p>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink md:text-5xl">
          Four commitments. <span className="italic text-pine">One community.</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
        {OBJECTIVES.map((o, i) => (
          <Reveal key={o.no} delay={(i % 2) * 120}>
            <article className="group flex gap-6 border-b border-ink/15 pb-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-ink/15 text-pine transition-all duration-500 group-hover:-rotate-6 group-hover:bg-pine group-hover:text-cream">
                <ObjectiveIcon name={o.icon} className="h-7 w-7" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
                  Objective {o.no}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                  {o.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink/65">{o.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="border-t border-ink/10 bg-sand/70 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">The four doors</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink md:text-5xl">
              Our vision, <span className="italic text-pine">kept open</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-xs text-sm leading-relaxed text-ink/55">
              The vision names four doors. Every OSDA programme walks through
              at least one of them.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article
                className={`group h-full border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  i === 0
                    ? "border-pine bg-pine text-cream hover:shadow-[8px_8px_0_0_var(--color-gold)]"
                    : "border-ink/15 bg-paper text-ink hover:shadow-[8px_8px_0_0_var(--color-goldsoft)]"
                }`}
              >
                <ObjectiveIcon
                  name={p.icon}
                  className={`h-10 w-10 transition-transform duration-500 group-hover:-rotate-6 ${
                    i === 0 ? "text-gold" : "text-pine"
                  }`}
                />
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 0 ? "text-cream/70" : "text-ink/65"
                  }`}
                >
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-28">
      <div className="flex flex-col items-start justify-between gap-8 border border-ink/15 bg-paper p-10 md:flex-row md:items-center md:p-14">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            Stories like this one are
            <br />
            <span className="italic text-pine">written by people who joined in.</span>
          </h2>
        </Reveal>
        <Reveal delay={150} className="shrink-0">
          <Link to="/contact" className="btn btn-pine">
            Join the work
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <Reveal delay={200}>
        <p className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-ink/40">
          <ArrowRight className="h-3.5 w-3.5 text-gold" />
          Next: meet the people behind OSDA — on the contact page
        </p>
      </Reveal>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        kicker="About OSDA"
        title={<span className="italic text-pine">Oghe Social Development Association.</span>}
        lede="Learn about the association, our vision and mission, our motto, and the objectives guiding our work."
      />
      <Story />
      <History />
      <Vision />
      <Mission />
      <Motto />
      <Objectives />
      <Pillars />
      <ClosingCta />
    </>
  );
}
