import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from './user';
import Cat from './cat';

@Entity()
export default class ToDo {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'boolean' })
  done

  @Column({ type: 'varchar' })
  title

  @ManyToOne(() => Cat, (cat) => cat.todos, { nullable: false })
  cat

  @ManyToOne(() => User, (user) => user.todos)
  user

}