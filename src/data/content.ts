/* ─────────────────────────────────────────────────────────────
   OSDA — central content
   Edit this file to change text, stats and photos site-wide.
   ───────────────────────────────────────────────────────────── */

export const ORG = {
  acronym: "OSDA",
  name: "Oghe Social Development Association",
  motto: [
    "Empowering Lives",
    "Building Communities",
    "Lifting the Forgotten",
    "Empowering the Future",
  ],
  tagline: "Community-led development for Oghe and beyond.",
  vision:
    "As an association, we hope to offer opportunities where every individual, regardless of background, has access to education, healthcare, economic opportunities, and a voice in governance — enabling inclusive and sustainable development for all.",
  mission: [
    {
      title: "Sustainable Community Development",
      text: "Our mission is to promote sustainable social development by implementing community-led programs that address poverty, inequality, and environmental challenges.",
    },
    {
      title: "Youth Empowerment",
      text: "Our mission is to inspire and support the next generation by improving access to education, mentorship, and life skills that empower youth to shape a better future for their communities.",
    },
  ],
  /* Placeholder contact details — replace with the real ones. */
  email: "hello@osda.org.ng",
  phone: "+234 (0) 800 000 0000",
  location: "Oghe, Akwa Ibom State, Nigeria",
  hours: "Monday – Friday · 9:00 – 17:00 WAT",
  socials: [
    { label: "X / Twitter", href: "#", icon: "x" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
};

export const IMAGES = {
  heroMain: {
    src: "https://images.pexels.com/photos/25457343/pexels-photo-25457343.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "African schoolchildren engaged in an outdoor class",
  },
  heroSub: {
    src: "https://images.pexels.com/photos/27785735/pexels-photo-27785735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Women celebrating with traditional drumming at a community gathering",
  },
  aboutStory: {
    src: "https://images.pexels.com/photos/39916933/pexels-photo-39916933.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Two women selling fresh produce at an outdoor market",
  },
  aboutGathering: {
    src: "https://images.pexels.com/photos/28561598/pexels-photo-28561598.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Community members in traditional attire at a communal gathering",
  },
  cta: {
    src: "https://images.pexels.com/photos/33001996/pexels-photo-33001996.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "A lively outdoor meeting at a community centre",
  },
};

export type IconKey =
  | "book"
  | "pulse"
  | "sprout"
  | "spark"
  | "cap"
  | "cross"
  | "coins"
  | "voice";

/* The four official OSDA objectives */
export const OBJECTIVES: {
  no: string;
  icon: IconKey;
  title: string;
  text: string;
}[] = [
  {
    no: "01",
    icon: "book",
    title: "Scholarships & Educational Support",
    text: "To provide scholarships and educational support to marginalized and underprivileged individuals.",
  },
  {
    no: "02",
    icon: "pulse",
    title: "Accessible Community Healthcare",
    text: "To promote accessible healthcare by establishing community health centres in underserved areas.",
  },
  {
    no: "03",
    icon: "sprout",
    title: "Microloans & Enterprise",
    text: "To support small-scale entrepreneurs with access to microloans and business development opportunities.",
  },
  {
    no: "04",
    icon: "spark",
    title: "Vocational & Life-Skills Training",
    text: "To offer vocational and life-skills training for youth, women, and children for self-reliance.",
  },
];

export const PROGRAMS: {
  tag: string;
  title: string;
  text: string;
  image: { src: string; alt: string };
}[] = [
  {
    tag: "Education",
    title: "Scholarships & Learning Support",
    text: "Tuition, books and one-on-one mentorship that keep underprivileged students in the classroom — and in the race for their future.",
    image: {
      src: "https://images.pexels.com/photos/35610368/pexels-photo-35610368.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Young students learning the alphabet with a teacher in a vibrant classroom",
    },
  },
  {
    tag: "Health",
    title: "Community Health Centres",
    text: "Accessible primary care, free screening days and health awareness in the corners of Oghe most often forgotten.",
    image: {
      src: "https://images.pexels.com/photos/6303645/pexels-photo-6303645.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "A clinician explaining a diagnosis to a female patient in a clinic hallway",
    },
  },
  {
    tag: "Enterprise",
    title: "Microloans & Business Development",
    text: "Small, honest seed capital and practical coaching for traders, farmers and small-scale entrepreneurs.",
    image: {
      src: "https://images.pexels.com/photos/33624055/pexels-photo-33624055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "Women selling fresh produce in colourful baskets at a Nigerian market",
    },
  },
  {
    tag: "Youth",
    title: "Vocational & Life-Skills Training",
    text: "Hands-on skills — tailoring, digital literacy, trades and communication — for youth, women and children.",
    image: {
      src: "https://images.pexels.com/photos/8369660/pexels-photo-8369660.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      alt: "A diverse group of adults engaged in a practical learning session",
    },
  },
];

/* Placeholder impact figures — replace with real numbers when ready. */
export const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 420, suffix: "+", label: "Scholarships supported" },
  { value: 300, suffix: "+", label: "Microloans disbursed" },
  { value: 6, suffix: "", label: "Community health points" },
  { value: 15, suffix: "k+", label: "Lives touched in Oghe" },
];

export const STEPS: { no: string; title: string; text: string }[] = [
  {
    no: "01",
    title: "Listen",
    text: "Every programme starts with the community. We sit, we hear, we assess real needs — nothing is imposed from the outside.",
  },
  {
    no: "02",
    title: "Fund",
    text: "Grants, scholarships and microloans go straight to the people who need them, with light-touch, transparent oversight.",
  },
  {
    no: "03",
    title: "Build",
    text: "Health centres, classrooms and training rooms are built with the community — not for it, and never without it.",
  },
  {
    no: "04",
    title: "Sustain",
    text: "We train local owners and step back slowly, so every project outlives the hands that started it.",
  },
];

/* The four pillars drawn directly from the OSDA vision statement */
export const PILLARS: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: "cap",
    title: "Education",
    text: "Every child gets a seat, a book, a teacher — and a mentor who believes in them.",
  },
  {
    icon: "cross",
    title: "Healthcare",
    text: "Care that does not require a long journey, a borrowed sum, or a lucky day.",
  },
  {
    icon: "coins",
    title: "Economic Opportunity",
    text: "Seed capital, skills and coaching that turn honest effort into lasting income.",
  },
  {
    icon: "voice",
    title: "Voice in Governance",
    text: "Community decisions taken in the community, by the community, for the community.",
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
