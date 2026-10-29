export type Leadership2010Profile = {
  id: string;
  name?: string;
  role: string;
  image?: string;
};

/** Offices, names, and portraits transcribed from the supplied 2010–2014 PDF. */
export const LEADERSHIP_2010_TO_2014: Leadership2010Profile[] = [
  {
    id: "president",
    name: "Engr Chief Gregory Nwafor",
    role: "President",
    image: "/images/osda-leadership-2010-2014/gregory-nwafor.jpg",
  },
  {
    id: "vice-president",
    name: "Engr Chief Obiora Ezeoha",
    role: "Vice President",
    image: "/images/osda-leadership-2010-2014/obiora-ezeoha.jpg",
  },
  {
    id: "secretary",
    name: "Suvr Marcel Okoli",
    role: "Secretary",
    image: "/images/osda-leadership-2010-2014/marcel-okoli.jpg",
  },
  {
    id: "assistant-secretary",
    name: "Mr Gerald Eze",
    role: "Assistant Secretary",
    image: "/images/osda-leadership-2010-2014/gerald-eze.jpg",
  },
  {
    id: "financial-secretary",
    role: "Financial Secretary",
  },
  {
    id: "treasurer",
    name: "Mr Gerald Aniamalu",
    role: "Treasurer",
    image: "/images/osda-leadership-2010-2014/gerald-aniamalu.jpg",
  },
  {
    id: "publicity-secretary",
    name: "Engr Chief Sir Michael Nzewigbo",
    role: "Publicity Secretary",
    image: "/images/osda-leadership-2010-2014/michael-nzewigbo.jpg",
  },
  {
    id: "provost-i",
    role: "Provost I",
  },
  {
    id: "provost-ii",
    role: "Provost II",
  },
];
