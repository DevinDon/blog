import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type Category = 'article' | 'image' | 'question' | 'song' | 'video';

export interface Item {
  id: number;
  author: string;
  category: Category;
  content: string;
  date: number;
  image?: string;
  liked: number;
  shared: number;
  summary: string;
  title: string;
}

@Entity('article')
export class ItemEntity extends BaseEntity implements Item {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  author!: string;

  @Column({
    type: 'varchar'
  })
  category!: Category;

  @Column({
    type: 'text'
  })
  content!: string;

  @Column()
  date!: number;

  @Column({
    nullable: true
  })
  image?: string;

  @Column({
    default: 0
  })
  liked!: number;

  @Column({
    default: 0
  })
  shared!: number;

  @Column()
  summary!: string;

  @Column()
  title!: string;

}
