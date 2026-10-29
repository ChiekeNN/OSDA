export type ActivityPage = {
  src: string;
  alt: string;
  caption: string;
};

export type ActivitySection = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  details?: string[];
  pages: ActivityPage[];
};

const page = (number: number, alt: string, caption: string): ActivityPage => ({
  src: `/images/activities/archive/page-${String(number).padStart(2, "0")}.jpg`,
  alt,
  caption,
});

export const ACTIVITIES: ActivitySection[] = [
  {
    id: "hospital-visit",
    title: "Nne Nke-Okwukwe Cottage Hospital",
    subtitle: "Our oversight visit at the hospital",
    summary:
      "The hospital is managed by the Congregation of the Daughters of Mary, Mother of Mercy (DMMM) and is located at Afor Oghe, Amankwo Road. The project poster describes it as OSDA’s first Aku-Ruo Uno project.",
    pages: [
      page(1, "Hospital project poster and photographs from an OSDA oversight visit.", "Hospital project and visit"),
    ],
  },
  {
    id: "scholarship-launch",
    title: "Scholarship Launch",
    subtitle: "Scholarship & Education Endowment Fund 2019",
    summary:
      "OSDA launched its Scholarship and Education Endowment Fund at Civic Centre, Akama Oghe.",
    details: [
      "Saturday, 29 December 2018",
      "10:00 a.m.",
      "Civic Centre, Akama Oghe, Ezeagu LGA, Enugu State",
    ],
    pages: [
      page(2, "Scholarship and Education Endowment Fund launch poster with date, time, and venue.", "Launch announcement"),
      page(3, "OSDA community members, Board of Trustees, and planning committee photographs.", "OSDA members and committees"),
      page(4, "OSDA leadership and scholarship event photographs.", "Leadership and launch activities"),
      page(5, "Scholarship launch event photographs and presentations.", "Launch event"),
      page(6, "Photographs from scholarship presentations and community activities.", "Scholarship presentations"),
      page(7, "Community and scholarship launch photographs.", "Community celebration"),
    ],
  },
  {
    id: "national-assembly-visits",
    title: "Visits to National Assembly Representatives",
    subtitle: "Delegations led by President Mr Gerald Aniamalu",
    summary:
      "OSDA’s President, members of the Board of Trustees, and executives visited Senator Osita Ngwu and Rt. Hon. Sunday Umehea.",
    pages: [
      page(8, "OSDA delegation during a visit to National Assembly Representative Senator Osita Ngwu.", "Visit to Senator Osita Ngwu"),
      page(9, "OSDA delegation during a visit to National Assembly Representative Rt. Hon. Sunday Umehea.", "Visit to Rt. Hon. Sunday Umehea"),
    ],
  },
  {
    id: "courtesy-visits",
    title: "Courtesy Visits",
    subtitle: "Reception and community visits",
    summary:
      "OSDA attended the reception for the first Senior Advocate of Nigeria (SAN) from Oghe and visited Chief Anthonia Nwankwo (née Nwafor), Deputy Comptroller of Customs.",
    pages: [
      {
        src: "/images/activities/courtesy-visits/first-san-reception.jpeg",
        alt: "OSDA members at the reception of Oghe’s first Senior Advocate of Nigeria.",
        caption: "Reception of Oghe’s first SAN",
      },
      {
        src: "/images/activities/courtesy-visits/chief-anthonia-nwankwo.jpeg",
        alt: "OSDA members visiting Chief Anthonia Nwankwo, Deputy Comptroller of Customs.",
        caption: "Visit to Chief Anthonia Nwankwo",
      },
    ],
  },
  {
    id: "kuje-property",
    title: "Our Kuje Property Inspection and Fencing",
    subtitle: "Property development",
    summary:
      "Photographs show OSDA representatives inspecting the Kuje property, building materials on site, and fence construction in progress.",
    pages: [
      page(10, "OSDA representatives inspecting the Kuje property and fencing work in progress.", "Property inspection and fencing"),
    ],
  },
  {
    id: "end-of-year-party",
    title: "End of Year Party",
    subtitle: "Red carpet photos",
    summary:
      "A collection of group portraits, guests, and celebration scenes from the OSDA end-of-year party.",
    pages: [
      page(11, "OSDA members and guests at the end-of-year party.", "Party group portraits"),
      page(12, "Guests and party scenes from the OSDA end-of-year celebration.", "Guests and celebration"),
    ],
  },
  {
    id: "orphanage-visit",
    title: "Our Visit to Orphanage Homes",
    subtitle: "Time with children and residents",
    summary:
      "Photographs capture the group visit, an indoor gathering, and a moment with a child at the homes.",
    pages: [
      page(13, "OSDA visitors and children gathered at an orphanage home.", "Visit to the homes"),
    ],
  },
  {
    id: "harvest-bazaar",
    title: "Annual Harvest and Bazaar Thanksgiving",
    subtitle: "St Francis Catholic Church, Pegi-Kuje, Abuja",
    summary:
      "The event album shows the church grounds, the harvest and bazaar gathering, and the printed programme for the 2023 celebration.",
    pages: [
      page(14, "Harvest and bazaar thanksgiving at St Francis Catholic Church, Pegi-Kuje, Abuja.", "Harvest and bazaar thanksgiving"),
    ],
  },
  {
    id: "enugu-day-2024",
    title: "Enugu Day 2024 and OSDA Award",
    subtitle: "Enugu State Indigenes’ General Assembly (ESIGA), Abuja",
    summary:
      "The 2024 Enugu Day celebration carried the theme “Our Culture & the Economic Imperatives.” OSDA received a Culture and Tradition Certificate of Merit for overall third position in the exhibition.",
    details: [
      "Colloquium and Awards: Friday, 6 December 2024, 7:00 p.m. at K-Class Hotel, Zone 5, Wuse, Abuja",
      "Enugu Day: Saturday, 7 December 2024, 10:00 a.m. at Old Parade Ground, Area 10, Garki, Abuja",
    ],
    pages: [
      page(15, "Poster for the 2024 Enugu Day celebration and its programme details.", "Enugu Day 2024 programme"),
      page(16, "Cultural performances and OSDA’s Culture and Tradition Certificate of Merit.", "Cultural exhibition and OSDA award"),
    ],
  },
];
