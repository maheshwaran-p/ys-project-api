import { Repository } from 'typeorm';
import { MultipleChoiceResponseDTO } from '../dto/multiple-choice-response.dto';
import { MultipleChoiceDTO } from '../dto/multiple-choice.dto';
import { MultipleChoiceResponse } from '../entities/multiple-choice-response.entity';
import { MultipleChoice } from '../entities/multiple-choice.entity';
export declare class MulitpleChoiceService {
    private mutipleChoiceRepository;
    private multipleChoiceResponseRepository;
    constructor(mutipleChoiceRepository: Repository<MultipleChoice>, multipleChoiceResponseRepository: Repository<MultipleChoiceResponse>);
    createMultipleChoice(courseId: number, questions: MultipleChoiceDTO[]): Promise<import("typeorm").InsertResult>;
    createMulitpleChoiceResponse(multipleChoiceResponseDTO: MultipleChoiceResponseDTO[], studentId: number): Promise<any>;
    getMultipleChoice(courseId: number): Promise<MultipleChoice[]>;
    getMultipleChoiceResponse(courseId: number, studentId: any): Promise<any>;
}
