import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Video } from './Video';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    personal_id: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    status: string;

    @Column()
    counter: number;

    @Column()
    allow: boolean;

    @OneToMany(type => Video, video => video.renter)
    videos: Video[];

}
