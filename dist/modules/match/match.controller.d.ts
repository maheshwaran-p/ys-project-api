import { MatchDTO, MatchResponseDTO } from 'src/models/dto/match.dto';
import { MatchService } from 'src/models/services/match.service';
export declare class MatchController {
    private matchService;
    constructor(matchService: MatchService);
    createMatch(matchDTOs: MatchDTO[], courseId: number): any;
    createMatchResponse(matchResponseDTOs: MatchResponseDTO[], studentId: number): any;
}
