import { Repository } from 'typeorm/repository/Repository';
import { FillInTheBlanks, FillResponse } from '../entities/fill.entity';
export declare class FillResponseService {
    private fillInTheBlanksResponseRepository;
    private fillRespository;
    constructor(fillInTheBlanksResponseRepository: Repository<FillResponse>, fillRespository: Repository<FillInTheBlanks>);
    fillresponse(questionId: number, studentId: number, answer: string): Promise<{
        questionId: number;
        studentId: number;
        answer: string;
        isCorrect: boolean;
    } & FillResponse>;
}
