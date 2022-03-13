/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller } from '@nestjs/common';
import { FillResponseDTO } from 'src/models/dto/fillintheblanksresponse.dto';
import { FillintheBlanksResponseService } from 'src/models/services/fillintheblanksresponse.service';

@Controller('fillresponse')
export class FillresponseController {


    constructor(
        private fillResponseService: FillintheBlanksResponseService

    ) { }


    fillresponse(@Body() fillResponseDTO: FillResponseDTO) {

        return this.fillResponseService.fillresponse(fillResponseDTO.questionId, fillResponseDTO.studentId, fillResponseDTO.answer);


    }

}
