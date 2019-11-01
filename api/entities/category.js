import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
  import Todo from './todo';
  
  @Entity()
  export default class Category {
    @PrimaryGeneratedColumn({type:'archer', unique:true})
    id
  
    @Column({ type: 'boolean' })
    done
  
    @Column({ type: 'varchar' })
    title

    @ManyToOne(() => User, (user) => user.todos)
    user
    
    @ManyToOne(() => User, (user) => user.todos)
    user
  }