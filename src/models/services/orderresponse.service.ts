/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { OrderResponse } from '../entities/order.entity';

@Injectable()
export class OrderresponseService {


constructor(
    @InjectRepository(OrderResponse)
    private orderResponseRespository: Repository<OrderResponse>,

){}

async orderResponse(questionId: number, studentId: number, answer: string): Promise<any> {

    return await this.orderResponseRespository.save({ questionId: questionId, studentId: studentId, answer: answer });

}

}
