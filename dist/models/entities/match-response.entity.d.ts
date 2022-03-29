import { MatchAnswer } from "./match-answer.entity";
import { MatchQuestion } from "./match-question.entity";
import { Student } from "./student.entity";
export declare class MatchResponse {
    id: number;
    student: Student;
    question: MatchQuestion;
    answer: MatchAnswer;
    isCorrect: boolean;
}
