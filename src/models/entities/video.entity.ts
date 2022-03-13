import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
import { Student } from "./student.entity";

@Entity()
export class Video extends BaseEntity {

    @Column()
    question: string;

    @ManyToOne(type => Course, course => course.id)
    course: Course;

}

@Entity()

export class VideoResponse extends BaseEntity {


    @ManyToOne(() => Video, video => video.id)
    question: Video;

    @ManyToOne(() => Student, student => student.id)
    student: Student;

    @Column()
    answer: string


}