import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface Motto {
  id: number;
  author?: string;
  content: string;
}

@Entity('motto')
export class MottoEntity extends BaseEntity implements Motto {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: true
  })
  author?: string;

  @Column()
  content!: string;

}
