import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MultipleChoiceResponseDTO, MultipleChoiceResponseInterface } from '../dto/multiple-choice-response.dto';
import { MultipleChoiceDTO } from '../dto/multiple-choice.dto';
import { MultipleChoiceResponse } from '../entities/multiple-choice-response.entity';
import { MultipleChoice } from '../entities/multiple-choice.entity';
import { CourseService } from './course.service';

@Injectable()
export class MulitpleChoiceService {

    constructor(
        @InjectRepository(MultipleChoice)
        private mutipleChoiceRepository: Repository<MultipleChoice>,
        @InjectRepository(MultipleChoiceResponse)
        private multipleChoiceResponseRepository: Repository<MultipleChoiceResponse>,
    ) { }

    async createMultipleChoice(courseId: number, questions: MultipleChoiceDTO[]) {
        const query = this.mutipleChoiceRepository.createQueryBuilder()
            .insert()
            .into(MultipleChoice)
            .values(
                questions.map(
                    e => ({
                        question: e.question,
                        answer: e.answer,
                        choiceOne: e.choiceOne,
                        choiceTwo: e.choiceTwo,
                        choiceThree: e.choiceThree,
                        course: { id: courseId }

                    })
                )

            )

        return query.execute();
    }

    async createMulitpleChoiceResponse(multipleChoiceResponseDTO: MultipleChoiceResponseDTO[], studentId: number): Promise<any> {
        let items: MultipleChoiceResponseInterface[] = [];
        for (let each of multipleChoiceResponseDTO) {
            items.push({
                answer: each.answer,
                questionId: each.questionId,
                isCorrect: each.answer === (await this.mutipleChoiceRepository.findOne({ id: each.questionId })).answer

            })
        }
        const query = this.multipleChoiceResponseRepository.createQueryBuilder()
            .insert()
            .into(MultipleChoiceResponse)
            .values(
                items.map(e => ({ answer: e.answer, question: { id: e.questionId }, student: { id: studentId }, isCorrect: e.isCorrect }))
            )

        return query.execute();
    }


}
