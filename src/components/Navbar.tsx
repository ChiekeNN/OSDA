import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ABOUT_NAV_LINKS, ADMINISTRATION_NAV_LINKS, NAV_LINKS, ORG } from "../data/content";
import { cn } from "../utils/cn";
import { ArrowUpRight } from "./icons";

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border font-display text-lg font-bold transition-colors duration-300",
          light
            ? "border-gold/60 text-gold group-hover:bg-gold group-hover:text-forest"
            : "border-pine/50 text-pine group-hover:bg-pine group-hover:text-cream"
        )}
      >
        O
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-xl font-bold tracking-tight",
            light ? "text-cream" : "text-ink"
          )}
        >
          OSDA<span className="text-gold">.</span>
        </span>
        <span
          className={cn(
            "mt-1 hidden text-[9.5px] font-semibold uppercase tracking-[0.22em] sm:block",
            light ? "text-cream/60" : "text-ink/50"
          )}
        >
          Oghe Social Development
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [administrationOpen, setAdministrationOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileAdministrationOpen, setMobileAdministrationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close the mobile panel on navigation */
  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
    setAdministrationOpen(false);
    setMobileAboutOpen(false);
    setMobileAdministrationOpen(false);
  }, [location.pathname, location.hash]);

  /* lock scroll while the mobile panel is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* top hairline strip */}
        <div className="hidden bg-forest text-cream/70 md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-[11px] tracking-wide">
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
              {ORG.location}
            </p>
            <p className="font-display italic text-gold/90">
              “Lifting the forgotten, empowering the future.”
            </p>
          </div>
        </div>

        {/* main bar */}
        <div
          className={cn(
            "transition-all duration-500",
            scrolled
              ? "bg-cream/95 shadow-[0_1px_0_0_rgba(24,39,32,0.12)] backdrop-blur-md"
              : "bg-cream/0"
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Wordmark />

            <nav className="hidden items-center gap-9 md:flex">
              {NAV_LINKS.map((link) =>
                link.to === "/about" ? (
                  <div key={link.to} className="relative">
                    <button
                      type="button"
                      aria-expanded={aboutOpen}
                      aria-haspopup="true"
                      onClick={() => setAboutOpen((value) => !value)}
                      className={cn(
                        "inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors",
                        location.pathname.startsWith("/about") ? "text-pine" : "text-ink/60 hover:text-ink"
                      )}
                    >
                      {link.label}
                      <svg aria-hidden="true" viewBox="0 0 16 16" className={cn("h-3.5 w-3.5 transition-transform", aboutOpen && "rotate-180")} fill="none">
                        <path d="m3.5 6 4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </button>
                    {aboutOpen && (
                      <div className="absolute left-0 top-full z-50 mt-4 w-60 border border-ink/10 bg-paper p-2 shadow-xl">
                        {ABOUT_NAV_LINKS.map((item) => (
                          <Link key={item.to} to={item.to} onClick={() => setAboutOpen(false)} className="block px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/65 transition-colors hover:bg-sand hover:text-pine">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.to === "/administration" ? (
                  <div key={link.to} className="relative">
                    <button
                      type="button"
                      aria-expanded={administrationOpen}
                      aria-haspopup="true"
                      onClick={() => setAdministrationOpen((value) => !value)}
                      className={cn(
                        "inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors",
                        location.pathname.startsWith("/administration") ? "text-pine" : "text-ink/60 hover:text-ink"
                      )}
                    >
                      {link.label}
                      <svg aria-hidden="true" viewBox="0 0 16 16" className={cn("h-3.5 w-3.5 transition-transform", administrationOpen && "rotate-180")} fill="none">
                        <path d="m3.5 6 4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </button>
                    {administrationOpen && (
                      <div className="absolute left-0 top-full z-50 mt-4 w-60 border border-ink/10 bg-paper p-2 shadow-xl">
                        {ADMINISTRATION_NAV_LINKS.map((item) => (
                          <Link key={item.to} to={item.to} onClick={() => setAdministrationOpen(false)} className="block px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/65 transition-colors hover:bg-sand hover:text-pine">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "link-sweep text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors",
                        isActive ? "active text-pine" : "text-ink/60 hover:text-ink"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <Link to="/contact" className="btn btn-pine px-6! py-3!">
                Get Involved
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>

            {/* mobile hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[70] flex h-11 w-11 items-center justify-center md:hidden"
            >
              <span
                className={cn(
                  "absolute h-[2px] w-6 bg-current transition-all duration-300",
                  open ? "rotate-45 bg-cream" : "-translate-y-[4px] bg-ink"
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-6 bg-current transition-all duration-300",
                  open ? "-rotate-45 bg-cream" : "translate-y-[4px] bg-ink"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* mobile panel */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col justify-center overflow-y-auto bg-forest px-8 py-24 transition-all duration-500 md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link, i) =>
            link.to === "/about" || link.to === "/administration" ? (
              <div
                key={link.to}
                style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
                className={cn(
                  "transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
              >
                {link.to === "/about" ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileAboutOpen}
                      onClick={() => setMobileAboutOpen((value) => !value)}
                      className={cn(
                        "flex items-center gap-3 font-display text-5xl font-semibold tracking-tight transition-colors",
                        location.pathname.startsWith("/about") || mobileAboutOpen ? "italic text-gold" : "text-cream hover:text-gold"
                      )}
                    >
                      {link.label}
                      <svg aria-hidden="true" viewBox="0 0 16 16" className={cn("h-5 w-5 transition-transform", mobileAboutOpen && "rotate-180")} fill="none">
                        <path d="m3.5 6 4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </button>
                    {mobileAboutOpen && (
                      <div className="ml-2 mt-3 flex flex-col border-l border-gold/40 pl-5">
                        {ABOUT_NAV_LINKS.map((item) => (
                          <Link key={item.to} to={item.to} className="py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream/70 transition-colors hover:text-gold">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileAdministrationOpen}
                      onClick={() => setMobileAdministrationOpen((value) => !value)}
                      className={cn(
                        "flex items-center gap-3 font-display text-5xl font-semibold tracking-tight transition-colors",
                        location.pathname.startsWith("/administration") || mobileAdministrationOpen ? "italic text-gold" : "text-cream hover:text-gold"
                      )}
                    >
                      {link.label}
                      <svg aria-hidden="true" viewBox="0 0 16 16" className={cn("h-5 w-5 transition-transform", mobileAdministrationOpen && "rotate-180")} fill="none">
                        <path d="m3.5 6 4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </button>
                    {mobileAdministrationOpen && (
                      <div className="ml-2 mt-3 flex flex-col border-l border-gold/40 pl-5">
                        {ADMINISTRATION_NAV_LINKS.map((item) => (
                          <Link key={item.to} to={item.to} className="py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream/70 transition-colors hover:text-gold">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
                className={({ isActive }) =>
                  cn(
                    "font-display text-5xl font-semibold tracking-tight transition-all duration-500",
                    open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                    isActive ? "italic text-gold" : "text-cream hover:text-gold"
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
          <Link
            to="/contact"
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
            className={cn(
              "btn btn-cream mt-8 self-start transition-all duration-500",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            Get Involved
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
        <p
          className={cn(
            "absolute bottom-10 left-8 text-[11px] uppercase tracking-[0.28em] text-cream/40 transition-all delay-500 duration-500",
            open ? "opacity-100" : "opacity-0"
          )}
        >
          {ORG.name}
        </p>
      </div>
    </>
  );
}
