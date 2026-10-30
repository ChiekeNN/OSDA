import { Link } from "react-router-dom";
import { NAV_LINKS, ORG } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest text-cream/75">
      {/* giant ghost wordmark */}
      <div
        aria-hidden
        className="pointer-events-none select-none whitespace-nowrap px-4 pt-6 font-display text-[26vw] font-black leading-[0.8] tracking-tight text-cream/[0.05] lg:text-[19rem]"
      >
        OSDA
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12">
          {/* identity */}
          <div className="lg:col-span-5">
            <div className="inline-flex max-w-full bg-white p-3">
              <img
                src="/images/osda-logo.png"
                alt="Official logo of Oghe Social Development Association (OSDA)"
                width="627"
                height="489"
                className="h-auto w-56 max-w-full object-contain"
              />
            </div>
            <p className="mt-6 max-w-sm font-display text-xl italic leading-relaxed text-cream/85">
              {ORG.motto.join(". ")}
              <span className="text-gold">.</span>
            </p>
          </div>

          {/* explore */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.filter((link) => link.to !== "/contact").map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-sweep text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* our work */}
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
              Our Work
            </p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>Scholarships &amp; Education</li>
              <li>Community Healthcare</li>
              <li>Microloans &amp; Enterprise</li>
              <li>Vocational &amp; Life Skills</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col gap-3 border-t border-cream/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-cream/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {ORG.name}. All rights reserved.
          </p>
          <p className="font-display normal-case italic tracking-normal text-cream/55">
            “Empowering the Future.”
          </p>
        </div>
      </div>
    </footer>
  );
}
