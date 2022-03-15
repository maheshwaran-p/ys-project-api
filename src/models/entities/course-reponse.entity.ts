import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./course.entity";
import { Student } from "./student.entity";

@Entity()
export class CourseResponse {
    @ManyToOne(() => Course, course => course.id, { primary: true })
    course: Course;
    @ManyToOne(() => Student, student => student.id, { primary: true })
    student: Student;
    @Column({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

}