/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {


    constructor(
        @InjectRepository(Order)
        private orderRespository: Repository<Order>,


    ) { }



  async  orderQuestion(courseId:number,question:string,answer : string):Promise<any>{

        return await this.orderRespository.save({courseId:courseId,question:question,answer:answer})
     
    }


}
