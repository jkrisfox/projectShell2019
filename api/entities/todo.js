import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
} from 'typeorm';
import User from './user';
import Category from './category'

@Entity()
export default class ToDo {
    @PrimaryGeneratedColumn()
    id

    @Column({ type: 'boolean' })
    done

    @Column({ type: 'varchar' })
    title

    @ManyToOne(() => Category, (category) => category.todos)
    category

    @ManyToOne(() => User, (user) => user.todos)
    user
}