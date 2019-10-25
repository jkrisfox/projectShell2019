import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
  } from 'typeorm';
  import Todo from './todo';
  
  @Entity()
  export default class Category {
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'varchar' })
    name
  
    @OneToMany(() => Todo, (todo) => todo.category)
    todos
  }
  