export interface Content<T = any> {
  title: string;
  author: string;
  date: number | Date;
  image?: string;
  summary: string;
  content: string;
  addition?: T;
}
