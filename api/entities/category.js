/* eslint-disable import/no-cycle */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import ToDo from './todo';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar', unique: true })
  name

  @OneToMany(() => ToDo, (todo) => todo.category)
  todos
}
