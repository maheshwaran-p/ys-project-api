import { MarkDTO } from 'src/models/dto/marks.dto';
import { MarksService } from 'src/models/services/marks.service';
export declare class MarksController {
    private marksService;
    constructor(marksService: MarksService);
    percentage(params: any): Promise<any>;
    addMarks(markDTO: MarkDTO): Promise<any>;
    getCourseMarks(params: any): Promise<any>;
    leaderboard(): Promise<any>;
}
