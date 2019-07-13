import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.model';

@Entity('comment')
export class CommentEntity extends BaseEntity implements Comment {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  content!: string;

  @Column()
  date!: number;

  @Column()
  disliked!: number;

  @Column({
    default: 0
  })
  item!: number;

  @Column({
    default: 0
  })
  liked!: number;

  @Column({
    nullable: true
  })
  reply?: number;

  @Column()
  user!: number;

}
