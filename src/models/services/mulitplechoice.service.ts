import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MultipleChoiceDTO } from '../dto/multiple-choice.dto';
import { MultipleChoice } from '../entities/multiple-choice.entity';

@Injectable()
export class MulitpleChoiceService {

    constructor(
        @InjectRepository(MultipleChoice)
        private mutipleChoiceRepository: Repository<MultipleChoice>
    ) { }

    createMultipleChoice(courseId: number, questions: MultipleChoiceDTO[]) {
        const question = questions.map(e => ({ ...e, courseId: courseId }));
        console.log(question);
        return this.mutipleChoiceRepository.createQueryBuilder().insert().into(MultipleChoice)
            .values(question);
    }


}
