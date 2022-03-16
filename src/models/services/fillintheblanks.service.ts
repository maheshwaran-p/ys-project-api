/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { FillInTheBlanks } from '../entities/fill.entity';

@Injectable()
export class FillintheblanksService {


    constructor(
        @InjectRepository(FillInTheBlanks)
        private fillInTheBlanksQuestionRepository: Repository<FillInTheBlanks>,

    ) { }

    async fillintheblanksquestion(question: string, answer: string): Promise<any> {

        return await this.fillInTheBlanksQuestionRepository.save({ question: question, answer: answer });
    }
}
