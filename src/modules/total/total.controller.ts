/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { TotalDTO } from 'src/models/dto/total.dto';
import { TotalService } from 'src/models/services/total.service';

@Controller('/total')
export class TotalController {


  constructor(
        private totalService: TotalService
    ) { }



  @Post()
   async updateTotal( @Body() totalDto:TotalDTO):Promise<any>{
    // console.log(params.id);

    return await this.totalService.updateTotal(totalDto);
   



   }


}
