import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
import { Student } from "./student.entity";
export declare class Video extends BaseEntity {
    question: string;
    course: Course;
}
export declare class VideoResponse extends BaseEntity {
    question: Video;
    student: Student;
    answer: string;
}
