/* eslint-disable import/no-cycle */
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
  import ToDo from './todo';
  import USER from './user';
  
  @Entity()
  export default class category {
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'varchar', unique: true })
    kind
  
    @OneToMany(() => ToDo, (todo) => todo.categorys, { eager: true })
    category

    @ManyToOne(() => USER, (user) => user.kind)
    userCategory
  }