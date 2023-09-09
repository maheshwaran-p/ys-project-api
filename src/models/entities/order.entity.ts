import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
import { Student } from "./student.entity";
import { Video } from "./video.entity";


@Entity()

export class Order extends BaseEntity {


    @Column()
    question: string


    @Column()
    answer: string


    @ManyToOne(type => Course, course => course.id)
    course: Course;


}


@Entity()
export class OrderResponse extends BaseEntity{


    @ManyToOne(() => Video, video => video.id)
    question: Video;

    @ManyToOne(() => Student, student => student.id)
    student: Student;

    @Column()
    answer: string


}