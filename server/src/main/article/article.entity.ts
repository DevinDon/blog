import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column()
  content!: string;

}
