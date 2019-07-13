export interface Comment {
  id: number;
  content: string;
  date: number;
  disliked: number;
  item: number;
  liked: number;
  reply?: number;
  user: number;
}
