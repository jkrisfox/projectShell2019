/* eslint-disable import/no-cycle */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import ToDo from './todo';
import User from './user';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar', unique: true })
  name

  @OneToMany(() => ToDo, (todo) => todo.category)
  todos

  @ManyToOne(() => User, (user) => user.category)
  user
}
