import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface User {
  id: number;
  name: string;
  head?: string;
}

@Entity('user')
export class UserEntity extends BaseEntity implements User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  head?: string;

}
