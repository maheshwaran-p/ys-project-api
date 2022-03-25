/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Marks } from '../entities/marks.entity';

@Injectable()
export class MarksService {


    constructor(
        @InjectRepository(Marks)
        private marksRespository: Repository<Marks>,
       
    ) { }



}
