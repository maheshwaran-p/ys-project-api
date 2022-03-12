import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatchDTO } from '../dto/match.dto';
import { Course } from '../entities/course.entity';
import { MatchAnswer } from '../entities/match-answer.entity';
import { MatchQuestion } from '../entities/match-question.entity';
import { MatchEntity } from '../entities/match.entity';

@Injectable()
export class MatchService {

    constructor(
        @InjectRepository(MatchEntity)
        private matchRepository: Repository<MatchEntity>,
        @InjectRepository(MatchAnswer)
        private matchAnswerRepository: Repository<MatchAnswer>,
        @InjectRepository(MatchQuestion)
        private matchQuestionRepository: Repository<MatchQuestion>
    ) { }


    async createMatch(matchDTOs: MatchDTO[], courseId: number): Promise<MatchEntity> {

        const matchEntity = await this.matchRepository.save({ course: { id: courseId } });
        for (const e of matchDTOs) {
            const answer = await this.matchAnswerRepository.save({ answer: e.answer });
            await this.matchQuestionRepository.save({ question: e.question, answer: answer, match: matchEntity });
        }
        return matchEntity;
    }
}
