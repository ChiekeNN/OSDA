import { useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

const TOPICS = [
  "Volunteer with us",
  "Make a donation",
  "Partnership / Sponsorship",
  "Scholarship enquiry",
  "Press",
  "Something else",
];

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const firstName = name.trim().split(/\s+/)[0];
    window.alert(
      `${firstName ? `Thank you, ${firstName}.` : "Thank you."} We have received your “${topic}” message. This is a demo form: the message was not sent or stored.`,
    );
    setName("");
    setEmail("");
    setTopic(TOPICS[0]);
    setMessage("");
  };

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
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-ink/30 transition-colors focus:border-pine focus:outline-none"
          />
        </label>
      </div>

      <label className="mt-7 block">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">
          Topic
        </span>
        <select
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className="mt-2 w-full cursor-pointer border-b border-ink/25 bg-transparent py-3 text-ink transition-colors focus:border-pine focus:outline-none"
        >
          {TOPICS.map((item) => (
            <option key={item} value={item}>
              {item}
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
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your message here…"
          className="mt-2 w-full resize-y border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-ink/30 transition-colors focus:border-pine focus:outline-none"
        />
      </label>

      <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-pine">
          Submit message
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Send a message"
        lede="Use the form below to leave a message for OSDA."
      />
      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
