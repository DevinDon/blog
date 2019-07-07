export interface Content<T = any> {
  title: string;
  author: string;
  date: number | Date;
  image?: string;
  /** Summary or content. */
  text: string;
  addition?: T;
}
