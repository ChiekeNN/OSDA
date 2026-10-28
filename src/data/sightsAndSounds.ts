export type OghePhoto = { src: string; alt: string; caption?: string };

type OghePhotoGroup = { title: string; photos: OghePhoto[] };

const photo = (filename: string, alt: string, caption?: string): OghePhoto => ({
  src: `/images/oghe-gallery/${filename}`,
  alt,
  caption,
});

export const CULTURAL_PHOTOS: OghePhoto[] = [
  {
    src: "/images/sights-and-sounds-oghe.jpg",
    alt: "A costumed masquerade performer at a community gathering in Oghe.",
  },
  photo("page-01-02.jpg", "A masquerade performer in a raffia costume among community members."),
  photo("page-01-03.jpg", "Cowrie shells arranged together."),
  photo("page-01-04.jpg", "Two colorful masquerade performers in a village setting."),
  photo("page-01-05.jpg", "A tall, decorated masquerade structure at a gathering."),
  photo("page-01-06.jpg", "A performer wearing a black-and-white striped costume."),
  photo("page-02-01.jpg", "Two participants wrestling on a sandy field as a crowd watches."),
  photo("page-02-02.jpg", "Women in colorful traditional clothing dancing at a gathering."),
];

export const VILLAGE_PHOTO_GROUPS: OghePhotoGroup[] = [
  {
    title: "OWE",
    photos: [
      photo("page-02-03.jpg", "Bottles and containers of palm wine."),
      photo("page-02-04.jpg", "A prepared meal served on a plate."),
      photo("page-02-05.jpg", "A fruit tree laden with produce."),
    ],
  },
  {
    title: "AKAMA",
    photos: [
      photo("page-03-01.jpg", "Cashew apples growing on a tree."),
      photo("page-03-02.jpg", "Citrus fruit growing among green leaves."),
      photo("page-03-03.jpg", "Green pear-shaped fruit on a tree."),
      photo("page-03-04.jpg", "Shredded food produce in a blue bowl."),
      photo("page-04-01.jpg", "Roadside view of Eke Ugbo Market in Akama Oghe.", "Eke Ugbo Market, Akama Oghe"),
    ],
  },
  {
    title: "AMANKWO",
    photos: [
      photo("page-04-02.jpg", "A farmer standing in a cultivated field."),
      photo("page-04-03.jpg", "A harvested bunch of oil palm fruit."),
      photo("page-05-01.jpg", "Community members processing palm produce."),
      photo("page-05-02.jpg", "A split seed pod with seeds inside."),
      photo("page-05-03.jpg", "Market stalls and vendors at Afor Oghe Market.", "Afor Oghe Market"),
    ],
  },
  {
    title: "AMANSIODO",
    photos: [
      photo("page-06-01.jpg", "A harvest of cassava roots."),
      photo("page-06-02.jpg", "Yams freshly gathered from a field."),
      photo("page-06-03.jpg", "Green plantains laid out after harvest."),
      photo("page-06-04.jpg", "Bunches of bananas ready for market."),
    ],
  },
  {
    title: "NEKE",
    photos: [
      photo("page-06-05.jpg", "A field of ripening rice."),
      photo("page-06-06.jpg", "Beans growing on a vine."),
      photo("page-07-01.jpg", "A pineapple growing in a field."),
      photo("page-07-02.jpg", "Papayas growing on a tree."),
    ],
  },
  {
    title: "OYOFO",
    photos: [
      photo("page-07-03.jpg", "Maize growing on the stalk."),
      photo("page-07-04.jpg", "A bowl of fresh peppers."),
      photo("page-07-05.jpg", "Kola nuts opened to show the seeds."),
      photo("page-07-06.jpg", "Mangoes growing on a tree."),
    ],
  },
  {
    title: "IWOLLO",
    photos: [
      photo("page-08-01.jpg", "A field of leafy crops with a farmer working."),
      photo("page-08-02.jpg", "A soursop fruit growing on a tree."),
      photo("page-08-03.jpg", "Okra growing on a plant."),
      photo("page-08-04.jpg", "Workers beside a load of coal."),
      photo("page-08-05.jpg", "A vendor and market stalls at Afor Iwollo Oghe.", "Afor Iwollo Oghe"),
    ],
  },
];
