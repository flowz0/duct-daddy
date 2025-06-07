import { StaticImageData } from "next/image";

import PlaceholderImg from "@/public/1000x1000.svg";

export interface Review {
  id: number;
  name: string;
  message: string;
  brand: string;
  avatar: StaticImageData;
}

export const topRowReviews: Review[] = [
  {
    id: 1, 
    name: "Sarah W.",
    brand: "Blue Springs",
    message: "Duct Daddy was fast, friendly, and did a thorough job. I noticed a difference in air quality the same day!",
    avatar: PlaceholderImg
  },
  {
    id: 2, 
    name: "Sarah W.",
    brand: "Blue Springs",
    message: "Duct Daddy was fast, friendly, and did a thorough job. I noticed a difference in air quality the same day!",
    avatar: PlaceholderImg
  },
  {
    id: 3, 
    name: "Sarah W.",
    brand: "Blue Springs",
    message: "Duct Daddy was fast, friendly, and did a thorough job. I noticed a difference in air quality the same day!",
    avatar: PlaceholderImg
  },
  {
    id: 4, 
    name: "Sarah W.",
    brand: "Blue Springs",
    message: "Duct Daddy was fast, friendly, and did a thorough job. I noticed a difference in air quality the same day!",
    avatar: PlaceholderImg
  },
  {
    id: 5, 
    name: "Sarah W.",
    brand: "Blue Springs",
    message: "Duct Daddy was fast, friendly, and did a thorough job. I noticed a difference in air quality the same day!",
    avatar: PlaceholderImg
  },
];

export const bottomRowReviews: Review[] = [
  {
    id: 1, 
    name: "James T.",
    brand: "Lee's Summit",
    message: "No hidden fees, great communication, and quality work. I highly recommend them!",
    avatar: PlaceholderImg
  },
  {
    id: 2, 
    name: "James T.",
    brand: "Lee's Summit",
    message: "No hidden fees, great communication, and quality work. I highly recommend them!",
    avatar: PlaceholderImg
  },
  {
    id: 3, 
    name: "James T.",
    brand: "Lee's Summit",
    message: "No hidden fees, great communication, and quality work. I highly recommend them!",
    avatar: PlaceholderImg
  },
  {
    id: 4, 
    name: "James T.",
    brand: "Lee's Summit",
    message: "No hidden fees, great communication, and quality work. I highly recommend them!",
    avatar: PlaceholderImg
  },
  {
    id: 5, 
    name: "James T.",
    brand: "Lee's Summit",
    message: "No hidden fees, great communication, and quality work. I highly recommend them!",
    avatar: PlaceholderImg
  },
];