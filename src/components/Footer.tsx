import { Link } from "react-router-dom";
import { NAV_LINKS, ORG } from "../data/content";
import { MailIcon, PhoneIcon, PinIcon, SocialIcon } from "./icons";

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
            <p className="font-display text-3xl font-bold text-cream">
              OSDA<span className="text-gold">.</span>
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-cream/50">
              {ORG.name}
            </p>
            <p className="mt-6 max-w-sm font-display text-xl italic leading-relaxed text-cream/85">
              {ORG.motto.join(". ")}
              <span className="text-gold">.</span>
            </p>
            <div className="mt-8 flex gap-3">
              {ORG.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-forest"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* explore */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-sweep text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="link-sweep text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* our work */}
          <div className="lg:col-span-3">
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

          {/* contact */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
              Reach Us
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${ORG.email}`}
                  className="group flex items-start gap-2.5 text-cream/70 transition-colors hover:text-gold"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                  {ORG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-cream/70">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                {ORG.phone}
              </li>
              <li className="flex items-start gap-2.5 text-cream/70">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
                {ORG.location}
              </li>
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
