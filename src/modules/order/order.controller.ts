/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller } from '@nestjs/common';
import { OrderQuestionDTO } from 'src/models/dto/order.dto';
import { OrderService } from 'src/models/services/order.service';

@Controller()
export class OrderController {

    
    constructor(
        private orderService: OrderService

    ) { }


  async  orderQuestion(@Body() orderQuestionDTO:OrderQuestionDTO):Promise<any>{

     return await this.orderService.orderQuestion(orderQuestionDTO.course,orderQuestionDTO.question,orderQuestionDTO.answer);

    }
}
