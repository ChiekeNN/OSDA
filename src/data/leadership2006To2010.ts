export type Leadership2006Profile = {
  id: string;
  name?: string;
  role: string;
  image?: string;
  note?: string;
};

/** Offices and names transcribed from the supplied 2006–2010 leadership PDF. */
export const LEADERSHIP_2006_TO_2010: Leadership2006Profile[] = [
  {
    id: "president",
    name: "Mr Lazarous Eke",
    role: "President",
  },
  {
    id: "vice-president",
    name: "Chief S.N. Obi",
    role: "Vice President",
    image: "/images/osda-leadership-2006-2010/chief-sn-obi.jpg",
  },
  {
    id: "secretary",
    role: "Secretary",
  },
  {
    id: "assistant-secretary",
    role: "Assistant Secretary",
  },
  {
    id: "financial-secretary",
    role: "Financial Secretary",
  },
  {
    id: "treasurer",
    name: "Mr Pascal",
    role: "Treasurer",
    note: "The source document gives no surname.",
  },
  {
    id: "publicity-secretary",
    name: "Engr Chief Sir Michael Nzewigbo",
    role: "Publicity Secretary",
    image: "/images/osda-leadership-2006-2010/michael-nzewigbo.jpg",
  },
  {
    id: "provost-officer-1",
    role: "Provost Officer I",
  },
  {
    id: "provost-officer-2-first-listing",
    role: "Provost Officer II",
  },
  {
    id: "provost-officer-2-second-listing",
    role: "Provost Officer II",
    note: "The source document lists Provost Officer II twice.",
  },
];
