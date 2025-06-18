import { StaticImageData } from "next/image";

export interface BlogProps {
  id: string;
  author: string;
  createdAt: string;
  readTime: number;
  title: string;
  img: StaticImageData;
  summary: string;
  header: string;
  paragraph: string;
  header2: string;
  paragraph2: string;
}