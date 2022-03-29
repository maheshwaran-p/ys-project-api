import { FillResponseDTO } from 'src/models/dto/fillintheblanks.dto';
import { FillResponseService } from 'src/models/services/fillintheblanksresponse.service';
export declare class FillresponseController {
    private fillResponseService;
    constructor(fillResponseService: FillResponseService);
    fillresponse(fillResponseDTO: FillResponseDTO): Promise<{
        questionId: number;
        studentId: number;
        answer: string;
        isCorrect: boolean;
    } & import("../../models/entities/fill.entity").FillResponse>;
}
