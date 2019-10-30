import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
  } from 'typeorm';
  import User from './user';
  import ToDo from './todo';

  
  @Entity()
  export default class Cat {
    @PrimaryGeneratedColumn()
    id

    @Column({ type: 'varchar' })
    name

    @ManyToOne(() => User, (user) => user.cats)
    user

  }
  