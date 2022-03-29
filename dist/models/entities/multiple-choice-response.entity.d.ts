import { BaseEntity } from "./base.entity";
import { MultipleChoice } from "./multiple-choice.entity";
import { Student } from "./student.entity";
export declare class MultipleChoiceResponse extends BaseEntity {
    student: Student;
    question: MultipleChoice;
    answer: string;
    isCorrect: boolean;
}
