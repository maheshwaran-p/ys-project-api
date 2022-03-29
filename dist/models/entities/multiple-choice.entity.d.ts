import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
export declare class MultipleChoice extends BaseEntity {
    question: string;
    answer: string;
    choiceOne: string;
    choiceTwo: string;
    choiceThree: string;
    course: Course;
}
