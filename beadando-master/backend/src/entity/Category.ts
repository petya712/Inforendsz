import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Video } from "./Video";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Video, video => video.categories)
    videos: Video[];
}
