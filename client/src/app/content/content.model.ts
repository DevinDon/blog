export interface Content<T = any> {
  title: string;
  author: string;
  date: number | Date;
  image?: string;
  summary: string;
  text: string;
  addition?: T;
}
