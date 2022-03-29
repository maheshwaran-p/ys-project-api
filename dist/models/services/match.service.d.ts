import { Repository } from 'typeorm';
import { MatchDTO, MatchResponseDTO } from '../dto/match.dto';
import { MatchAnswer } from '../entities/match-answer.entity';
import { MatchQuestion } from '../entities/match-question.entity';
import { MatchResponse } from '../entities/match-response.entity';
import { MatchEntity } from '../entities/match.entity';
export declare class MatchService {
    private matchRepository;
    private matchAnswerRepository;
    private matchQuestionRepository;
    private matchResponseRepository;
    constructor(matchRepository: Repository<MatchEntity>, matchAnswerRepository: Repository<MatchAnswer>, matchQuestionRepository: Repository<MatchQuestion>, matchResponseRepository: Repository<MatchResponse>);
    createMatch(matchDTOs: MatchDTO[], courseId: number): Promise<MatchEntity>;
    createMatchReponse(matchResponseDTOs: MatchResponseDTO[], studentId: number): Promise<import("typeorm").InsertResult>;
}
