export interface Comment {
  id: number;
  content: string;
  date: number;
  disliked: number;
  belong: number;
  liked: number;
  reply?: number;
  user: number;
}
