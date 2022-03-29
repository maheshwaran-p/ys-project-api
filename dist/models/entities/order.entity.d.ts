import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
import { Student } from "./student.entity";
import { Video } from "./video.entity";
export declare class Order extends BaseEntity {
    question: string;
    answer: string;
    course: Course;
}
export declare class OrderResponse extends BaseEntity {
    question: Video;
    student: Student;
    answer: string;
}
