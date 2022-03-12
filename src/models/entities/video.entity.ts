import { Column, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";


export class Video extends BaseEntity {

    @Column()
    question: string;

    @ManyToOne(type => Course, course => course.id)
    course: Course;

}