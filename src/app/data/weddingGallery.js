import { getImagesFromFolder } from "../../utils/importImages";

export const weddingGallery = [
  {
    id: "wedding1",
    title: "Wedding 1",
    bannerImage:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003355/cld-sample-2.jpg",
    events: {
      haldi: getImagesFromFolder("wedding1", "haldi", 4),
      mehandi: getImagesFromFolder("wedding1", "mehandi", 3),
      sangeet: getImagesFromFolder("wedding1", "sangeet", 4),
    },
  },
  {
    id: "wedding2",
    title: "Wedding 2",
    bannerImage:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003355/cld-sample-2.jpg",
    events: {
      haldi: getImagesFromFolder("wedding2", "haldi", 3),
      mehandi: getImagesFromFolder("wedding2", "mehandi", 4),
      sangeet: getImagesFromFolder("wedding2", "sangeet", 5),
    },
  },
  {
    id: "wedding3",
    title: "Wedding 3",
    bannerImage:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003355/cld-sample-2.jpg",
    events: {
      haldi: getImagesFromFolder("wedding2", "haldi", 3),
      mehandi: getImagesFromFolder("wedding2", "mehandi", 4),
      sangeet: getImagesFromFolder("wedding2", "sangeet", 5),
    },
  },
  {
    id: "wedding4",
    title: "Wedding 4",
    bannerImage:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003355/cld-sample-2.jpg",
    events: {
      haldi: getImagesFromFolder("wedding2", "haldi", 3),
      mehandi: getImagesFromFolder("wedding2", "mehandi", 4),
      sangeet: getImagesFromFolder("wedding2", "sangeet", 5),
    },
  },
  {
    id: "wedding5",
    title: "Wedding 5",
    bannerImage:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003355/cld-sample-2.jpg",
    events: {
      haldi: getImagesFromFolder("wedding2", "haldi", 3),
      mehandi: getImagesFromFolder("wedding2", "mehandi", 4),
      sangeet: getImagesFromFolder("wedding2", "sangeet", 5),
    },
  },
  {
    id: "wedding6",
    title: "Wedding 6",
    bannerImage:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/v1738003355/cld-sample-2.jpg",
    events: {
      haldi: getImagesFromFolder("wedding2", "haldi", 3),
      mehandi: getImagesFromFolder("wedding2", "mehandi", 4),
      sangeet: getImagesFromFolder("wedding2", "sangeet", 5),
    },
  },
];
