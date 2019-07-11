export type Category = 'article' | 'image' | 'question' | 'song' | 'video';

export interface Article {
  id: number;
  title: string;
  author: string;
  date: number;
  image?: string;
  summary: string;
  content: string;
}
