import { BaseEntity } from "./base.entity";
import { Course } from "./course.entity";
import { MatchQuestion } from "./match-question.entity";
export declare class MatchEntity extends BaseEntity {
    course: Course;
    questions: MatchQuestion[];
}
