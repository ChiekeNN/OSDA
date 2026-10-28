import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import {
  CULTURAL_PHOTOS,
  VILLAGE_PHOTO_GROUPS,
  type OghePhoto,
} from "../data/sightsAndSounds";

function PhotoGallery({ title, photos }: { title: string; photos: OghePhoto[] }) {
  return (
    <section className="border-t border-ink/10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-8 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {photos.map((image) => (
            <figure
              key={image.src}
              className="mb-4 break-inside-avoid overflow-hidden border border-ink/10 bg-paper shadow-sm"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="block h-auto w-full transition-transform duration-500 hover:scale-[1.025]"
              />
              {image.caption && (
                <figcaption className="border-t border-ink/10 px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/60">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

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

      <section className="bg-forest py-16 text-cream md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="eyebrow text-gold!">Land, people and produce</p>
            <div className="mt-7 space-y-5 font-display text-xl leading-relaxed text-cream/85 md:text-2xl">
              <p>
                Oghe communities are mainly agrarian and are also endowed with various natural resources.
              </p>
              <p>
                The Oghe community supports the Enugu State and Federal Government economies through agricultural products and solid minerals. The photographs below show some of the community’s agricultural activities and produce.
              </p>
              <p className="border-l-2 border-gold pl-5 text-gold md:pl-7">
                Coal and other solid minerals are abundant in Oghe town.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PhotoGallery title="Culture and community" photos={CULTURAL_PHOTOS} />
      {VILLAGE_PHOTO_GROUPS.map((group) => (
        <PhotoGallery key={group.title} title={group.title} photos={group.photos} />
      ))}
    </>
  );
}
