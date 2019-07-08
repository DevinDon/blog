export type Category = 'article' | 'image' | 'question' | 'song' | 'video';

export interface Content<T = any> {
  id: number;
  title: string;
  author: string;
  category: Category;
  date: number | Date;
  image?: string;
  summary: string;
  content: string;
  addition?: T;
}
