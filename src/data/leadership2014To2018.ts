export type Leadership2014Profile = {
  id: string;
  name?: string;
  role: string;
  image?: string;
};

/** Offices, names, and portraits transcribed from the supplied 2014–2018 PDF. */
export const LEADERSHIP_2014_TO_2018: Leadership2014Profile[] = [
  {
    id: "president",
    name: "Chief Kenneth Ezeekwu",
    role: "President",
    image: "/images/osda-leadership-2014-2018/kenneth-ezeekwu.jpg",
  },
  {
    id: "vice-president",
    name: "Barr Chief Peter Ozoagu",
    role: "Vice President",
    image: "/images/osda-leadership-2014-2018/peter-ozoagu.jpg",
  },
  {
    id: "secretary",
    name: "Mr Gerald Ezeh",
    role: "Secretary",
    image: "/images/osda-leadership-2014-2018/gerald-ezeh.jpg",
  },
  {
    id: "assistant-secretary",
    role: "Assistant Secretary",
  },
  {
    id: "financial-secretary",
    name: "Mrs Veronica Okolie",
    role: "Financial Secretary",
  },
  {
    id: "assistant-financial-secretary",
    name: "Miss Ifeoma Chiude",
    role: "Assistant Financial Secretary",
    image: "/images/osda-leadership-2014-2018/ifeoma-chiude.jpg",
  },
  {
    id: "treasurer",
    name: "High Chief Obidon",
    role: "Treasurer",
    image: "/images/osda-leadership-2014-2018/high-chief-obidon.jpg",
  },
  {
    id: "publicity-secretary",
    name: "Engr Sir Chief Michael Nzewigbo",
    role: "Publicity Secretary",
    image: "/images/osda-leadership-2014-2018/michael-nzewigbo.jpg",
  },
  {
    id: "provost-i",
    name: "Chukwudi Okafor",
    role: "Provost I",
  },
  {
    id: "provost-ii",
    role: "Provost II",
  },
  {
    id: "welfare-officer-i",
    name: "Mr Anthony Obi",
    role: "Welfare Officer I",
  },
  {
    id: "welfare-officer-ii",
    name: "Mrs Hellen Ukpong",
    role: "Welfare Officer II",
    image: "/images/osda-leadership-2014-2018/hellen-ukpong.jpg",
  },
];
