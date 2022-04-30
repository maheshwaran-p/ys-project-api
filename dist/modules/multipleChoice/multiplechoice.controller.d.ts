import { MultipleChoiceResponseDTO } from 'src/models/dto/multiple-choice-response.dto';
import { MultipleChoiceDTO } from 'src/models/dto/multiple-choice.dto';
import { MulitpleChoiceService } from 'src/models/services/mulitplechoice.service';
export declare class MultipleChoiceController {
    private multipleChoiceService;
    constructor(multipleChoiceService: MulitpleChoiceService);
    getMultipleChoice(req: any, courseId: number): any;
    createMultipleChoice(multipleChoiceDTO: MultipleChoiceDTO[], courseId: number): any;
    getMultipleChoiceResponse(req: any, courseId: number): any;
    createMultipleChoiceResponse(req: any, multipleChoiceResponseDTO: MultipleChoiceResponseDTO[]): any;
}
