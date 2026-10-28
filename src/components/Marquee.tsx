import { ORG } from "../data/content";
import { DiamondIcon } from "./icons";

/** Seamless scrolling motto ribbon. Pauses for reduced-motion users. */
export default function Marquee({ dark = true }: { dark?: boolean }) {
  const items = [...ORG.motto, ORG.acronym];

  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 font-display text-lg md:text-xl tracking-wide ${
              item === ORG.acronym ? "italic" : ""
            }`}
          >
            {item}
          </span>
          <DiamondIcon
            className={`h-2.5 w-2.5 shrink-0 ${dark ? "text-gold" : "text-pine"}`}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden border-y py-4 select-none ${
        dark ? "bg-forest border-forest text-cream" : "bg-goldsoft border-gold/40 text-forest"
      }`}
    >
      <div className="flex w-max animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
