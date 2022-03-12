import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MultipleChoiceDTO } from '../dto/multiple-choice.dto';
import { MultipleChoice } from '../entities/multiple-choice.entity';
import { CourseService } from './course.service';

@Injectable()
export class MulitpleChoiceService {

    constructor(
        @InjectRepository(MultipleChoice)
        private mutipleChoiceRepository: Repository<MultipleChoice>,
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


}
