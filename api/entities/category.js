import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    Unique
  } from 'typeorm';
import User from './user';
import ToDo from './todo';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar' })
  title

  @ManyToOne(() => User, (user) => user.categories)
  user

  @OneToMany(() => ToDo, (todo) => todo.category)
  todos
}