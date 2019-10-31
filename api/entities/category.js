import {
   Entity,
   Column,
   PrimaryGeneratedColumn,
   ManyToOne,
   OneToMany
} from 'typeorm';
import User from './user';
import ToDo from './todo';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar'})
  Name

  @ManyToOne(() => User, (user) => user.category)
  user

  @OneToMany(() => ToDo, (todo) => todo.category, {eager:true})
  todos
}