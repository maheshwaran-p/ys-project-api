import { FillQuestionDTO } from 'src/models/dto/fillintheblanks.dto';
import { FillintheblanksService } from 'src/models/services/fillintheblanks.service';
export declare class FillController {
    private fillquestinService;
    constructor(fillquestinService: FillintheblanksService);
    getQuestions(courseId: number): void;
    fillquestion(fillQuestionDTO: FillQuestionDTO): Promise<any>;
}
