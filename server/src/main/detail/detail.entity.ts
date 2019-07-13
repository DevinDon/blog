import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category, Detail } from './detail.model';

@Entity('detail')
export class DetailEntity extends BaseEntity implements Detail {

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
