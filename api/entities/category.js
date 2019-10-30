import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from './user';
import ToDo from './todo';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar' })
  name

  @ManyToOne(() => User, (user) => user.categories)
  user

  @OneToMany(() => ToDo, (todo) => todo.category, {eager:true})
  todos
}
