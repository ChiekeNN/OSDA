import type { IconKey } from "../data/content";

type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* Open book with a rising ray — scholarships */
export function BookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 6.5C10.2 5 7.6 4.4 4 4.5v13c3.6-.1 6.2.5 8 2 1.8-1.5 4.4-2.1 8-2v-13c-3.6-.1-6.2.5-8 2Z" />
      <path d="M12 6.5v13" />
      <path d="M8.2 8.4c1 .1 1.9.3 2.7.7M8.2 11.4c1 .1 1.9.3 2.7.7" opacity=".65" />
      <path d="M12 2.8v0M10.2 2.2l-.9 1.4M13.8 2.2l.9 1.4" />
    </svg>
  );
}

/* Heart with pulse line — healthcare */
export function PulseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 20.2S3.5 15 3.5 9.3c0-2.8 2.1-4.8 4.6-4.8 1.7 0 3.1.9 3.9 2.3.8-1.4 2.2-2.3 3.9-2.3 2.5 0 4.6 2 4.6 4.8 0 5.7-8.5 10.9-8.5 10.9Z" />
      <path d="M6.5 11.5h3l1.4-2.6 2 4.6 1.4-2h3.2" />
    </svg>
  );
}

/* Sprout growing from a coin — microloans & enterprise */
export function SproutIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <ellipse cx="12" cy="19.5" rx="6.5" ry="2.6" />
      <path d="M12 17v-5.2" />
      <path d="M12 11.8c0-2.9 2.2-4.9 5.6-4.9 0 2.9-2.2 4.9-5.6 4.9Z" />
      <path d="M12 10c0-2.1-1.6-3.7-4-3.7 0 2.1 1.6 3.7 4 3.7Z" />
    </svg>
  );
}

/* Hand lifting a spark — skills & self-reliance */
export function SparkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M3.5 17.5h4.2l3 1.2c1 .4 1.7 1.2 1.8 2.3l.1 1.5" />
      <path d="M12.6 22.5l3.9-1.4c.8-.3 1.3-1.1 1.1-2l-.7-2.8 4-1.9c.8-.4 1-1.4.5-2.1l-.4-.6c-.4-.6-1.2-.9-1.9-.6l-6.4 3" />
      <path d="M4.2 17.2c-.8-2.6-.2-5 1.7-6.4l3.5-2.6c1.1-.8 2.4-.9 3.5-.3l-4.2 7.6" />
      <path d="M17.8 3.2v2.4M16.6 4.4h2.4M19.6 2.4l-1.4 1.4M21 3.8l-1.4 1.4" />
    </svg>
  );
}

/* Graduation cap */
export function CapIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
      <path d="M6.5 11.5v4.2c0 1.1 2.5 2.6 5.5 2.6s5.5-1.5 5.5-2.6v-4.2" />
      <path d="M21.5 9.5v5" />
      <circle cx="21.5" cy="16" r="0.9" />
    </svg>
  );
}

/* Medical cross in a rounded shield */
export function CrossIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 2.8 20 5.5v6.1c0 5-3.4 8.4-8 9.6-4.6-1.2-8-4.6-8-9.6V5.5l8-2.7Z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

/* Stacked coins with an up arrow */
export function CoinsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <ellipse cx="10.5" cy="18.5" rx="7" ry="2.8" />
      <path d="M3.5 18.5v-3.7c0 1.6 3.1 2.9 7 2.9s7-1.3 7-2.9v3.7" />
      <path d="M17.8 11.2 17.8 6.8M15.6 8.6l2.2-2.2 2.2 2.2" />
    </svg>
  );
}

/* Raised megaphone — voice in governance */
export function VoiceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M3.5 10.5v3.4l3.6.9 4.9 3.4V6.2L7.1 9.6l-3.6.9Z" />
      <path d="M13.8 9.2c1 .9 1.6 2.1 1.6 3.4s-.6 2.5-1.6 3.4" />
      <path d="M16.8 6.8c1.8 1.5 2.8 3.6 2.8 5.8s-1 4.3-2.8 5.8" />
      <path d="M6.8 15.2 7.6 19a1.5 1.5 0 0 0 1.5 1.2h.8" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M4 12h15M14 6.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M7 17 17 7M9 6.5h8.5V15" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M4.5 12.5 10 18 19.5 6.5" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M5.5 4h3.6l1.4 4.2-2.2 1.7a13 13 0 0 0 5.8 5.8l1.7-2.2L20 14.9v3.6c0 .8-.7 1.5-1.5 1.5C10.6 19.6 4.4 13.4 4 5.5 4 4.7 4.7 4 5.5 4Z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M12 21.5s7-6.1 7-11.3A7 7 0 0 0 5 10.2c0 5.2 7 11.3 7 11.3Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function DiamondIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 4l6.5 8L12 20l-6.5-8L12 4Z" />
    </svg>
  );
}

/* Social glyphs */
export function XSocialIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.6 3h3l-6.7 7.7L21.8 21h-6.2l-4.8-6.3L5.2 21h-3l7.2-8.2L2.4 3h6.3l4.4 5.8L17.6 3Zm-1.1 16.2h1.7L7.7 4.7H5.9l10.6 14.5Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7h2.6l.5-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.6V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.7v3h2.6v7h3.2Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={1.7} className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.5 8.8H3.6V21h2.9V8.8ZM5 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM12 21v-6.3c0-1.5.7-2.5 2.1-2.5 1.3 0 1.9.9 1.9 2.5V21h2.9v-7c0-2.9-1.5-4.4-3.8-4.4-1.8 0-2.7 1-3.1 1.7V8.8H9.2c.1.8.1 2.2.1 3.1V21H12Z" />
    </svg>
  );
}

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "x":
      return <XSocialIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    default:
      return null;
  }
}

export const ObjectiveIcon = ({ name, className }: { name: IconKey; className?: string }) => {
  switch (name) {
    case "book":
      return <BookIcon className={className} />;
    case "pulse":
      return <PulseIcon className={className} />;
    case "sprout":
      return <SproutIcon className={className} />;
    case "spark":
      return <SparkIcon className={className} />;
    case "cap":
      return <CapIcon className={className} />;
    case "cross":
      return <CrossIcon className={className} />;
    case "coins":
      return <CoinsIcon className={className} />;
    case "voice":
      return <VoiceIcon className={className} />;
  }
};
