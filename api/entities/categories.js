/* eslint-disable import/no-cycle */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import User from './user';
import Todo from './todo';

@Entity()
export default class Categories {
	@PrimaryGeneratedColumn()
	id

	@Column({ type: 'varchar', unique: true })
	name

	@OneToMany(() => ToDo, (todo) => todo.categories, { eager: true })
	todos

	@ManyToOne(() => User, (user) => user.categories)
	user
}
