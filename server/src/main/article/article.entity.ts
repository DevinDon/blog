import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type Category = 'article' | 'image' | 'question' | 'song' | 'video';

export interface Article {
  id: number;
  title: string;
  author: string;
  date: number;
  image?: string;
  summary: string;
  content: string;
  liked: number;
  shared: number;
}

@Entity('article')
export class ArticleEntity extends BaseEntity implements Article {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  date!: number;

  @Column({
    nullable: true
  })
  image?: string;

  @Column()
  summary!: string;

  @Column({
    type: 'text'
  })
  content!: string;

  @Column({
    default: 0
  })
  liked!: number;

  @Column({
    default: 0
  })
  shared!: number;

}
