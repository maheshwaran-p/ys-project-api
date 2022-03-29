import { MultipleChoiceResponseDTO } from 'src/models/dto/multiple-choice-response.dto';
import { MultipleChoiceDTO } from 'src/models/dto/multiple-choice.dto';
import { MulitpleChoiceService } from 'src/models/services/mulitplechoice.service';
export declare class MultipleChoiceController {
    private multipleChoiceService;
    constructor(multipleChoiceService: MulitpleChoiceService);
    getMultipleChoice(req: any, courseId: number): Promise<import("../../models/entities/multiple-choice.entity").MultipleChoice[]>;
    createMultipleChoice(multipleChoiceDTO: MultipleChoiceDTO[], courseId: number): Promise<import("typeorm").InsertResult>;
    getMultipleChoiceResponse(req: any, courseId: number): Promise<any>;
    createMultipleChoiceResponse(req: any, multipleChoiceResponseDTO: MultipleChoiceResponseDTO[]): Promise<any>;
}
