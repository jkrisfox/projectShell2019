import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import User from './user';

@Entity()
export default class ToDo {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'boolean' })
  done

  @Column({ type: 'varchar' })
  title

  @Column({ type: 'varchar' })
  category

  @ManyToOne(() => User, (user) => user.todos)
  user
}
