import { MatchAnswer } from "./match-answer.entity";
import { MatchEntity } from "./match.entity";
export declare class MatchQuestion {
    id: number;
    question: string;
    answer: MatchAnswer;
    match: MatchEntity;
}
