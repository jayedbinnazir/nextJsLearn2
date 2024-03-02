import { StaticImageData } from "next/image";
import photo1 from "../photos/1.jpg";
import photo2 from "../photos/2.jpg";
import photo3 from "../photos/3.jpg";
import photo4 from "../photos/4.jpg";
import photo5 from "../photos/5.jpg";
import photo6 from "../photos/6.jpg";
import photo7 from "../photos/7.jpg";

export type wonderImageProps = {
  id: number;
  name: string;
  alt: string;
  src: StaticImageData;
  title: string;
  description: string;
};

export const wonderImage: wonderImageProps[] = [
  {
    id: 1,
    name: "photo1",
    alt: "photo1",
    src: photo1,
    title: "first image",
    description: "a quick brown fox jump over the lazzy dog",
  },
  {
    id: 2,
    name: "photo2",
    alt: "photo2",
    src: photo2,
    title: "second image",
    description: "a quick brown fox jump over the lazzy dog",
  },
  {
    id: 3,
    name: "photo3",
    alt: "photo3",
    src: photo3,
    title: "Third image",
    description: "a quick brown fox jump over the lazzy dog",
  },
  {
    id: 4,
    name: "photo4",
    alt: "photo4",
    src: photo4,
    title: "4th image",
    description: "a quick brown fox jump over the lazzy dog",
  },
  {
    id: 5,
    name: "photo5",
    alt: "photo5",
    src: photo5,
    title: "Fifth image",
    description: "a quick brown fox jump over the lazzy dog",
  },
  {
    id: 6,
    name: "photo6",
    alt: "photo6",
    src: photo6,
    title: "Sixth image",
    description: "a quick brown fox jump over the lazzy dog",
  },
  {
    id: 7,
    name: "photo7",
    alt: "photo7",
    src: photo7,
    title: "Seventh image",
    description: "a quick brown fox jump over the lazzy dog",
  },
];
