export type TrusteeProfile = {
  community: string;
  name?: string;
  role: string;
  image?: string;
};

export const TRUSTEES: TrusteeProfile[] = [
  {
    community: "Owe",
    role: "Member",
  },
  {
    community: "Akama",
    name: "Engr Chief Gregory Nwafor",
    role: "Member",
    image: "/images/osda-administration/akama-gregory-nwafor.jpg",
  },
  {
    community: "Amankwo",
    name: "Chief Kenneth Ogwu",
    role: "Chairman, Board of Trustee",
    image: "/images/osda-administration/amankwo-kenneth-ogwu.jpg",
  },
  {
    community: "Amansiodo",
    name: "Suvr Chief Charles Anike",
    role: "Member",
    image: "/images/osda-administration/amansiodo-charles-anike.jpg",
  },
  {
    community: "Neke",
    name: "Engr Chief Obiora Ezeoha",
    role: "Member",
    image: "/images/osda-administration/neke-obiora-ezeoha.jpg",
  },
  {
    community: "Oyofo",
    name: "Chief Kenneth Ezekwu",
    role: "Member",
    image: "/images/osda-administration/oyofo-kenneth-ezekwu.jpg",
  },
  {
    community: "Iwollo",
    name: "High Chief Obinna Aneke",
    role: "Member",
    image: "/images/osda-administration/iwollo-obinna-aneke.jpg",
  },
];

export const BOARD_SECRETARY: TrusteeProfile = {
  community: "Board of Trustees",
  name: "Chief Peter Ozoagu Esq",
  role: "Secretary to the Board",
  image: "/images/osda-administration/board-secretary-peter-ozoagu.jpg",
};
