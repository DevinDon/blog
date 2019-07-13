import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category, Content } from './content.model';

@Entity('content')
export class ContentEntity extends BaseEntity implements Content {

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
