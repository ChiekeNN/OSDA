import { useState, type FormEvent, type ReactNode } from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import {
  CheckIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  SocialIcon,
} from "../components/icons";
import { ORG } from "../data/content";

const TOPICS = [
  "Volunteer with us",
  "Make a donation",
  "Partnership / Sponsorship",
  "Scholarship enquiry",
  "Press",
  "Something else",
];

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-pine">
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/45">
          {label}
        </p>
        <p className="mt-1.5 text-ink transition-colors group-hover:text-pine">
          {value}
        </p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="group block">
      {content}
    </a>
  ) : (
    <div className="group">{content}</div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Demo submit — wire this to Formspree, Netlify Forms or your own backend
    // before going live. See the note under the form.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center border border-ink/15 bg-paper p-10 text-center shadow-[10px_10px_0_0_var(--color-goldsoft)] md:p-14">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-forest">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h3 className="mt-7 font-display text-3xl font-semibold tracking-tight text-ink">
          Message received{name ? `, ${name.split(" ")[0]}` : ""}.
        </h3>
        <p className="mt-4 max-w-sm leading-relaxed text-ink/65">
          Thank you for reaching out about “{topic}”. We typically reply within
          two working days.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="btn btn-line mt-8"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-ink/15 bg-paper p-8 shadow-[10px_10px_0_0_var(--color-goldsoft)] md:p-10"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">
            Your name *
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ada Obi"
            className="mt-2 w-full border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-ink/30 transition-colors focus:border-pine focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">
            Email *
          </span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-ink/30 transition-colors focus:border-pine focus:outline-none"
          />
        </label>
      </div>

      <label className="mt-7 block">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">
          I’m reaching out to…
        </span>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-2 w-full cursor-pointer border-b border-ink/25 bg-transparent py-3 text-ink transition-colors focus:border-pine focus:outline-none"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-7 block">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">
          Message *
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a little about yourself, or the idea you want to build with us…"
          className="mt-2 w-full resize-none border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-ink/30 transition-colors focus:border-pine focus:outline-none"
        />
      </label>

      <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-pine">
          Send message
        </button>
        <p className="text-xs text-ink/45">
          We reply within <span className="font-semibold text-ink/70">2 working days</span>.
        </p>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader
        kicker="Contact us"
        title={
          <>
            Say <span className="italic text-pine">hello</span>.
          </>
        }
        lede="Volunteers, donors, partners, press — or simply a neighbour with an idea. Our inbox is open, and our door more so."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* details */}
          <div className="space-y-10 lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Reach the association</p>
            </Reveal>
            <div className="space-y-8">
              <Reveal delay={80}>
                <InfoRow
                  icon={<MailIcon className="h-5 w-5" />}
                  label="Email"
                  value={ORG.email}
                  href={`mailto:${ORG.email}`}
                />
              </Reveal>
              <Reveal delay={140}>
                <InfoRow
                  icon={<PhoneIcon className="h-5 w-5" />}
                  label="Phone"
                  value={ORG.phone}
                  href={`tel:${ORG.phone.replace(/[^+\d]/g, "")}`}
                />
              </Reveal>
              <Reveal delay={200}>
                <InfoRow
                  icon={<PinIcon className="h-5 w-5" />}
                  label="Location"
                  value={ORG.location}
                />
              </Reveal>
              <Reveal delay={260}>
                <InfoRow
                  icon={<ClockIcon className="h-5 w-5" />}
                  label="Office hours"
                  value={ORG.hours}
                />
              </Reveal>
            </div>

            <Reveal delay={320}>
              <div className="border border-ink/15 bg-paper p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                  Follow the work
                </p>
                <div className="mt-5 flex gap-3">
                  {ORG.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center border border-ink/15 text-pine transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-forest"
                    >
                      <SocialIcon name={s.icon} className="h-4.5 w-4.5" />
                    </a>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink/60">
                  Prefer to just come? The association meets with the
                  community every Friday at the Oghe market square.
                </p>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <ContactForm />
              <p className="mt-5 text-xs leading-relaxed text-ink/45">
                * This form is a working demo — connect it to a form service
                (Formspree, Netlify Forms) or your own backend before going
                live. In the meantime, you can also write to us directly at{" "}
                <a
                  href={`mailto:${ORG.email}`}
                  className="link-sweep font-semibold text-pine"
                >
                  {ORG.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
