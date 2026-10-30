import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";
import Marquee from "../components/Marquee";
import NewsSection from "../components/NewsSection";
import OrbitBadge from "../components/OrbitBadge";
import Reveal from "../components/Reveal";
import {
  ArrowRight,
  ArrowUpRight,
  DiamondIcon,
  ObjectiveIcon,
  PinIcon,
} from "../components/icons";
import { IMAGES, OBJECTIVES, ORG, STATS, STEPS } from "../data/content";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
};

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      {/* faint background glow */}
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-gold/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* manifesto headline */}
          <div className="lg:col-span-7">
            <p className="eyebrow h-5">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
              {ORG.name} · Est. Oghe, Akwa Ibom
            </p>
            <h1 className="mt-8 text-[10.5vw] font-display font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl xl:text-6xl">
              <span className="mask-line">
                <span style={{ animationDelay: "0.1s" }}>Empowering lives.</span>
              </span>
              <span className="mask-line">
                <span style={{ animationDelay: "0.25s" }}>Building communities.</span>
              </span>
              <span className="mask-line">
                <span style={{ animationDelay: "0.4s" }} className="text-pine">
                  Lifting the <em className="italic text-gold">forgotten</em>.
                </span>
              </span>
              <span className="mask-line">
                <span
                  style={{ animationDelay: "0.55s" }}
                  className="italic font-normal text-ink/60"
                >
                  Empowering the future.
                </span>
              </span>
            </h1>
            <div className="mask-line mt-8 max-w-xl">
              <span style={{ animationDelay: "0.75s" }} className="block leading-relaxed text-ink/65">
                OSDA is a community-driven association in Oghe, Akwa Ibom State —
                opening the doors to education, healthcare, enterprise and
                skills for every individual, regardless of background.
              </span>
            </div>
            <div className="mask-line mt-10">
              <span
                style={{ animationDelay: "0.9s" }}
                className="flex flex-wrap gap-4"
              >
                <button onClick={() => scrollTo("objectives")} className="btn btn-pine">
                  See our objectives
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/about" className="btn btn-line">
                  About OSDA
                </Link>
              </span>
            </div>
          </div>

          {/* photo composition */}
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden border border-ink/10 shadow-[14px_14px_0_0_var(--color-gold)]">
              <img
                src={IMAGES.heroMain.src}
                alt={IMAGES.heroMain.alt}
                className="h-[420px] w-full animate-kenburns object-cover md:h-[500px]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-forest/85 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-cream/80">
                <span>Community school, Oghe</span>
                <span className="text-gold">In session</span>
              </div>
            </div>

            {/* overlapping secondary photo */}
            <div className="absolute -bottom-10 -left-4 hidden w-44 overflow-hidden border-4 border-cream shadow-xl sm:block md:-left-10 md:w-56 animate-float-soft">
              <img
                src={IMAGES.heroSub.src}
                alt={IMAGES.heroSub.alt}
                loading="lazy"
                className="h-32 w-full object-cover md:h-40"
              />
            </div>

            {/* rotating seal */}
            <div className="absolute -right-3 -top-9 md:-right-7">
              <div className="rounded-full bg-cream p-1.5 shadow-lg">
                <OrbitBadge />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pb-12 pt-16 text-[11px] uppercase tracking-[0.28em] text-ink/40 md:pb-16">
          <PinIcon className="h-4 w-4 text-gold" />
          Rooted in Oghe · Working for every community
        </div>
      </div>
    </section>
  );
}

function PresidentWelcome() {
  return (
    <section className="border-y border-ink/10 bg-sand/65 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">A message from our president</p>
            <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl">
              Welcome to <span className="italic text-pine">our community.</span>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-ink/60">
              A few words from the office of the President of Oghe Social Development Association.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={140}>
            <div className="border-l-2 border-gold pl-6 md:pl-10">
              <p className="font-display text-xl font-medium leading-relaxed text-ink md:text-2xl">
                It is my great honor and privilege to welcome you to Oghe Social Development Association.
              </p>
              <div className="mt-7 space-y-5 leading-relaxed text-ink/70">
                <p>
                  Our organization was established with a deep commitment to preserving our rich cultural heritage while promoting unity, empowerment, and sustainable development within our community.
                </p>
                <p>
                  We believe that culture is the foundation of identity, and identity is the foundation of strength.
                </p>
                <p>
                  As an association, our vision is to build a community where tradition and progress walk hand in hand, where our youths and unemployed are inspired, our elders are respected, rules are obeyed, and our people are united in purpose. Through education, social initiatives, cultural events, and development programs, we are building a stronger future together.
                </p>
                <p>
                  We are more than an organization: we are a family, a movement, and a platform for positive change within and outside Oghe Social Development Association.
                </p>
                <p>
                  We warmly invite organizations, government agencies, NGOs, embassies, and you to explore our activities, partner with us, and become an active part of this journey. Together, we can celebrate our heritage and shape a brighter tomorrow.
                </p>
                <p>Thank you for visiting our website, and welcome to our community.</p>
              </div>

              <div className="mt-9 flex flex-col items-start gap-1 border-t border-ink/10 pt-6">
                <span className="text-sm text-ink/55">Warm regards,</span>
                <span className="mt-2 font-display text-2xl font-semibold text-ink">Gerald Aniamalu</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-pine">President</span>
                <a
                  href="mailto:Osdaabuja2018@gmail.com"
                  className="link-sweep mt-3 text-sm text-ink/65"
                >
                  Osdaabuja2018@gmail.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">01 · Who we are</p>
            <p className="mt-8 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Oghe Social
              <br />
              Development
              <br />
              Association
              <span className="text-gold">.</span>
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={120}>
            <p className="font-display text-3xl font-medium leading-snug tracking-tight text-ink md:text-[2.6rem]">
              We believe opportunity should not depend on{" "}
              <em className="italic text-pine">where you are born</em> — only on
              what you dare to become.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl leading-relaxed text-ink/65">
              OSDA exists to close the gaps that hold individuals back: the
              classroom a child cannot afford, the health centre a village must
              travel for, the first capital a dream of a business is missing,
              and the skills a young person needs to stand on their own feet.
              Our programmes are community-led, transparent and built to last —
              because the association is not a visitor here. We are the
              community, working for itself.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <Link
              to="/about"
              className="link-sweep mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-pine"
            >
              Read our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-ink/10 bg-ink/10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-ink/10 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label} className="bg-sand/90 px-6 py-10 text-center">
            <Reveal delay={i * 90}>
              <CountUp
                to={s.value}
                suffix={s.suffix}
                className="font-display text-4xl font-semibold text-pine md:text-5xl"
              />
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
                {s.label}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

function Objectives() {
  return (
    <section id="objectives" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        {/* sticky column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <Reveal>
              <p className="eyebrow">02 · What we stand for</p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink md:text-5xl">
                Four objectives.
                <br />
                <span className="italic text-gold">One community.</span>
              </h2>
              <p className="mt-7 max-w-md leading-relaxed text-ink/60">
                The OSDA objectives are not a poster on a wall. They are the
                four directions of every naira, hour and idea this association
                moves.
              </p>
              <Link to="/about" className="btn btn-line mt-9">
                Read our story
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* objective rows */}
        <div className="lg:col-span-7">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.no} delay={i * 70}>
              <article className="group relative border-t border-ink/15 py-9 transition-colors duration-300 hover:bg-paper md:px-5">
                <div className="flex items-start gap-6">
                  <span className="w-10 shrink-0 font-display text-2xl italic text-gold">
                    {o.no}
                  </span>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-ink/15 text-pine transition-all duration-500 group-hover:-rotate-6 group-hover:bg-pine group-hover:text-cream">
                    <ObjectiveIcon name={o.icon} className="h-7 w-7" />
                  </span>
                  <div className="pr-8">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                      {o.title}
                    </h3>
                    <p className="mt-2.5 max-w-lg leading-relaxed text-ink/65">
                      {o.text}
                    </p>
                    <ArrowUpRight className="mt-4 h-5 w-5 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" />
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div
        aria-hidden
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <p className="eyebrow text-gold!">03 · How we work</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.06] tracking-tight md:text-5xl">
            From first conversation to <span className="italic text-gold">lasting change</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 110} className={i % 2 === 1 ? "lg:mt-12" : ""}>
              <div className="group relative border-t border-cream/20 pt-7 transition-colors duration-300 hover:border-gold">
                <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rotate-45 bg-gold" />
                <span className="font-display text-5xl font-semibold italic text-cream/20 transition-colors duration-300 group-hover:text-gold">
                  {s.no}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-16 text-center font-display text-lg italic text-cream/55">
            “Nothing for the community, without the community.”
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={IMAGES.cta.src}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/95 to-pine/80" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <DiamondIcon className="h-5 w-5 text-gold" />
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream md:text-5xl">
              Lift someone <span className="italic text-gold">with us</span>.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-cream/75">
              Volunteer a weekend, sponsor a seat in a classroom, back a
              microloan, or bring your organisation to the table — there is a
              place for you in this work.
            </p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:col-span-5 lg:justify-end">
          <Reveal delay={120}>
            <Link to="/contact" className="btn btn-cream">
              Volunteer
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={220}>
            <Link
              to="/contact"
              className="btn border border-cream/40 text-cream hover:border-gold hover:bg-gold hover:text-forest"
            >
              Partner with us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <PresidentWelcome />
      <NewsSection />
      <Marquee />
      <WhoWeAre />
      <Stats />
      <Objectives />
      <HowWeWork />
      <CallToAction />
    </>
  );
}
