import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatchDTO, MatchResponseDTO } from '../dto/match.dto';
import { Course } from '../entities/course.entity';
import { MatchAnswer } from '../entities/match-answer.entity';
import { MatchQuestion } from '../entities/match-question.entity';
import { MatchResponse } from '../entities/match-response.entity';
import { MatchEntity } from '../entities/match.entity';

@Injectable()
export class MatchService {


    constructor(
        @InjectRepository(MatchEntity)
        private matchRepository: Repository<MatchEntity>,
        @InjectRepository(MatchAnswer)
        private matchAnswerRepository: Repository<MatchAnswer>,
        @InjectRepository(MatchQuestion)
        private matchQuestionRepository: Repository<MatchQuestion>,
        @InjectRepository(MatchResponse)
        private matchResponseRepository: Repository<MatchResponse>
    ) { }


    async createMatch(matchDTOs: MatchDTO[], courseId: number): Promise<MatchEntity> {

        const matchEntity = await this.matchRepository.save({ course: { id: courseId } });
        for (const e of matchDTOs) {
            const answer = await this.matchAnswerRepository.save({ answer: e.answer });
            await this.matchQuestionRepository.save({ question: e.question, answer: answer, match: matchEntity });
        }
        return matchEntity;
    }

    createMatchReponse(matchResponseDTOs: MatchResponseDTO[], studentId: number) {
        const query = this.matchResponseRepository.createQueryBuilder()
            .insert()
            .into(MatchResponse)
            .values(
                matchResponseDTOs.map(e => ({
                    answer: { id: e.answerId },
                    question: { id: e.questionId },
                    student: { id: studentId }

                }))
            );

        return query.execute();

    }



}
