import { StaticImageData } from "next/image";

export interface BlogProps {
  id: number;
  blogAuthor: string;
  blogPostDate: string;
  blogReadTime: number;
  blogTitle: string;
  blogImg: StaticImageData;
  blogSummary: string;
  blogHeader: string;
  blogParagraph: string;
  blogHeader2: string;
  blogParagraph2: string;
}