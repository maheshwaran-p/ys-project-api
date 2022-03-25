/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { MarkDTO } from 'src/models/dto/marks.dto';
import { MarksService } from 'src/models/services/marks.service';

@Controller('/marks')
export class MarksController {


    constructor(
        private marksService: MarksService
    ) { }

@Post()
   async addMarks(@Body() markDTO:MarkDTO):Promise<any>{

  //  console.log(markDTO);

   return await this.marksService.addMarks(markDTO);

    }

}
