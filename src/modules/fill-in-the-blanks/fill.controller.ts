/*
https://docs.nestjs.com/controllers#controllers
*/

import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { FillQuestionDTO } from 'src/models/dto/fillintheblanks.dto';
import { FillintheblanksService } from 'src/models/services/fillintheblanks.service';

@Controller('/course/:courseId/fill')
export class FillController {


    constructor(
        private fillquestinService: FillintheblanksService

    ) { }

    @Get()
    getQuestions(
        @Param('courseId') courseId: number
    ) {


    }

    @Post()
    fillquestion(@Body() fillQuestionDTO: FillQuestionDTO): Promise<any> {

        return this.fillquestinService.fillintheblanksquestion(fillQuestionDTO.question, fillQuestionDTO.answer);

    }
}
