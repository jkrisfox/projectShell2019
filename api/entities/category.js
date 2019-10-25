import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar' })
  title
}
