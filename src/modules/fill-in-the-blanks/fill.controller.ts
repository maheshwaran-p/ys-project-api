/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { FillQuestionDTO } from 'src/models/dto/fillintheblanks.dto';
import { FillintheblanksService } from 'src/models/services/fillintheblanks.service';

@Controller('fillquestion')
export class FillController {


    constructor(
        private fillquestinService: FillintheblanksService

    ) { }

    @Post()
    fillquestion(@Body() fillQuestionDTO: FillQuestionDTO): Promise<any> {

        return this.fillquestinService.fillintheblanksquestion(fillQuestionDTO.question, fillQuestionDTO.answer);

    }
}
