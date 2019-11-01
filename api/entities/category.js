import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  import ToDo from './todo';
  import User from './user';
  
  @Entity()
  export default class Category {
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'varchar' })
    name

    @OneToMany(() => ToDo, (todo) => todo.category)
    todos

    @ManyToOne(() => User, (user) => user.categories)
    user
  }
