import { Repository } from 'typeorm/repository/Repository';
import { FillInTheBlanks } from '../entities/fill.entity';
export declare class FillintheblanksService {
    private fillInTheBlanksQuestionRepository;
    constructor(fillInTheBlanksQuestionRepository: Repository<FillInTheBlanks>);
    fillintheblanksquestion(question: string, answer: string): Promise<any>;
}
