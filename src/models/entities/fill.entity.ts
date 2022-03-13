import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
import { Student } from "./student.entity";


@Entity()
export class FillInTheBlanks extends BaseEntity {


    @Column()
    question: string
    @Column()
    answer: string
    @ManyToOne(type => Course, course => course.id)
    course: Course;


}

@Entity()
export class FillResponse extends BaseEntity {


    @ManyToOne(() => FillInTheBlanks, fillintheblanks => fillintheblanks.id)
    question: FillInTheBlanks;

    @ManyToOne(() => Student, student => student.id)
    student: Student;

    @Column()
    answer: string;

}