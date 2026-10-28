import type { ReactNode } from "react";
import Reveal from "./Reveal";
import ScrambleText from "./ScrambleText";

type Props = {
  kicker: string;
  title: ReactNode;
  lede?: string;
};

/** Editorial page header used on inner pages. */
export default function PageHeader({ kicker, title, lede }: Props) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 md:pb-20 md:pt-40">
      {/* decorative dashed ring */}
      <div
        aria-hidden
        className="absolute -right-24 top-24 h-64 w-64 rounded-full border border-dashed border-ink/15 md:h-80 md:w-80"
      />
      <div
        aria-hidden
        className="absolute -left-16 bottom-0 h-40 w-40 rounded-full border border-gold/30"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">
            <ScrambleText text={kicker} />
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-ink md:text-7xl">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/65">{lede}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
