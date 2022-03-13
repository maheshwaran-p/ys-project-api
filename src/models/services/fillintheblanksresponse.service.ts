/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { FillResponse } from '../entities/fill.entity';

@Injectable()
export class FillintheBlanksResponseService {


    constructor(
        @InjectRepository(FillResponse)
        private fillInTheBlanksResponseRepository: Repository<FillResponse>,

    ) { }


    fillresponse(questionId: number, studentId: number, answer: string) {

        return this.fillInTheBlanksResponseRepository.save({ questionId: questionId, studentId: studentId, answer: answer })

    }

}
