import { AddCourse } from "./addcourse.entity";
import { BaseEntity } from "./base.entity";
import { Student } from "./student.entity";
export declare class Marks extends BaseEntity {
    mark: string;
    student: Student;
    addcourse: AddCourse;
}
