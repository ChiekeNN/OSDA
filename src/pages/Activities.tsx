import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { ACTIVITIES } from "../data/activities";

export default function Activities() {
  return (
    <>
      <PageHeader
        kicker="OSDA"
        title={
          <>
            Activities<span className="italic text-pine">.</span>
          </>
        }
        lede="Projects, visits, and community celebrations."
      />

      <div className="border-y border-ink/10">
        {ACTIVITIES.map((activity, index) => (
          <section
            id={activity.id}
            key={activity.id}
            className={index % 2 === 0 ? "bg-sand/50 py-14 md:py-20" : "bg-paper py-14 md:py-20"}
          >
            <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <p className="eyebrow">Activity {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                    {activity.title}
                  </h2>
                  <p className="mt-3 text-sm font-semibold text-pine">{activity.subtitle}</p>
                  <p className="mt-5 text-sm leading-relaxed text-ink/65">{activity.summary}</p>
                  {activity.details && (
                    <ul className="mt-5 space-y-2 border-l border-pine/30 pl-4 text-sm leading-relaxed text-ink/65">
                      {activity.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  )}
                </div>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
                {activity.pages.map((page, pageIndex) => (
                  <Reveal key={page.src} delay={(pageIndex % 2) * 90}>
                    <figure className="h-full overflow-hidden border border-ink/10 bg-white shadow-sm">
                      <a href={page.src} target="_blank" rel="noreferrer" aria-label={`Open full-size archive image: ${page.caption}`}>
                        <img
                          src={page.src}
                          alt={page.alt}
                          loading="lazy"
                          className="aspect-[0.773] w-full object-contain transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </a>
                      <figcaption className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink/55">
                        {page.caption}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
