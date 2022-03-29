import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
import { Student } from "./student.entity";
export declare class FillInTheBlanks extends BaseEntity {
    question: string;
    answer: string;
    course: Course;
}
export declare class FillResponse extends BaseEntity {
    question: FillInTheBlanks;
    student: Student;
    answer: string;
    isCorrect: boolean;
}
