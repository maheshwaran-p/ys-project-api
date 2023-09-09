/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MarkDTO } from 'src/models/dto/marks.dto';
import { MarksService } from 'src/models/services/marks.service';

@Controller('/marks')
export class MarksController {


    constructor(
        private marksService: MarksService
    ) { }



    @Get('/percentage/:id')
    async percentage(@Param() params):Promise<any>{

    return await this.marksService.percentage(params.id)

    }


@Post()
   async addMarks(@Body() markDTO:MarkDTO):Promise<any>{

  //  console.log(markDTO);

   return await this.marksService.addMarks(markDTO);

    }


    @Get('/get/:id')
    getCourseMarks(@Param() params){

        return this.marksService.getCourseMarks(params.id);

    }


    @Get('/leader')
    leaderboard(){

        return this.marksService.leaderboard();

    }


}
