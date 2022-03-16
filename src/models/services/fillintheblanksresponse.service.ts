/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { FillInTheBlanks, FillResponse } from '../entities/fill.entity';

@Injectable()
export class FillResponseService {


    constructor(
        @InjectRepository(FillResponse)
        private fillInTheBlanksResponseRepository: Repository<FillResponse>,
        @InjectRepository(FillInTheBlanks)
        private fillRespository: Repository<FillInTheBlanks>

    ) { }


    async fillresponse(questionId: number, studentId: number, answer: string) {
        const question = await this.fillRespository.findOne({ id: questionId });
        return this.fillInTheBlanksResponseRepository.save({ questionId: questionId, studentId: studentId, answer: answer, isCorrect: question.answer === answer })

    }

}
