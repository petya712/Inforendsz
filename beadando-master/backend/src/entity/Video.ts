import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    type: string;

    @Column({ nullable: true, type: 'text' })
    author: string;

    @Column({ nullable: true, type: 'text' })
    title: string;

    @Column({ nullable: true, type: 'text' })
    date: string;

    @Column({ nullable: true, type: 'text' })
    status: string;

    @ManyToOne(type => User, {
        eager: true,
        cascade: true
    })
    renter: User;

    @ManyToMany(() => Category, category => category.videos, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    categories: Category[];
}