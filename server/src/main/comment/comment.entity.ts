import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface Comment {
  id: number;
  user?: number;
  /** 回复的评论. */
  reply?: number;
  content: string;
}

@Entity('comment')
export class CommentEntity extends BaseEntity implements Comment {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: true
  })
  user?: number;

  @Column({
    nullable: true
  })
  reply?: number;

  @Column()
  content!: string;

}
