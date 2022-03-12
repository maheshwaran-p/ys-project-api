import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MultipleChoiceResponseDTO } from '../dto/multiple-choice-response.dto';
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
        private courseService: CourseService
    ) { }

    async createMultipleChoice(courseId: number, questions: MultipleChoiceDTO[]) {
        const course = await this.courseService.getCourseById(courseId);
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
                        course: course

                    })
                )

            )

        return query.execute();
    }

    async createMulitpleChoiceResponse(multipleChoiceResponseDTO: MultipleChoiceResponseDTO[], studentId: number): Promise<any> {
        const query = this.multipleChoiceResponseRepository.createQueryBuilder()
            .insert()
            .into(MultipleChoiceResponse)
            .values(
                multipleChoiceResponseDTO.map(e => ({ answer: e.answer, question: { id: e.questionId }, student: { id: studentId } }))
            )

        return query.execute();
    }


}
