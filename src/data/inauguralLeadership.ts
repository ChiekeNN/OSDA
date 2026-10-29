export type LeadershipProfile = {
  name?: string;
  role: string;
  image?: string;
};

/** Members and offices transcribed from the supplied inaugural leadership PDF. */
export const INAUGURAL_LEADERSHIP: LeadershipProfile[] = [
  {
    name: "Late Engr Chief Nicolas Nzewigbo",
    role: "President",
    image: "/images/osda-inaugural-leadership/nicolas-nzewigbo.jpg",
  },
  {
    name: "Late Chief Vincent Igboeme",
    role: "First Vice President",
  },
  {
    name: "Late Chief Sylvester Obi",
    role: "Second Vice President",
    image: "/images/osda-inaugural-leadership/sylvester-obi.jpg",
  },
  {
    name: "Mr Godwin Chikelu",
    role: "Secretary",
    image: "/images/osda-inaugural-leadership/godwin-chikelu.jpg",
  },
  {
    name: "Qty Surv Marcel Okolie",
    role: "Assistant Secretary",
    image: "/images/osda-inaugural-leadership/marcel-okolie.jpg",
  },
  {
    name: "Mrs Veronica Okolie",
    role: "Financial Secretary",
  },
  {
    role: "Treasurer",
  },
  {
    role: "Provost I",
  },
  {
    role: "Provost II",
  },
  {
    name: "Engr Chief Sir Michael Nzewigbo",
    role: "Publicity Secretary",
    image: "/images/osda-inaugural-leadership/michael-nzewigbo.jpg",
  },
];
