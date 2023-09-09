/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller } from '@nestjs/common';
import { OrderResponseDTO } from 'src/models/dto/order.dto';
import { OrderresponseService } from 'src/models/services/orderresponse.service';

@Controller()
export class OrderresponseController {

    constructor(
        private orderResponseService: OrderresponseService

    ) { }


    async orderResponse(@Body() orderResponseDTO:OrderResponseDTO): Promise<any>{
    

        return await this.orderResponseService.orderResponse(orderResponseDTO.questionId,orderResponseDTO.studentId,orderResponseDTO.answer);



    }

}
