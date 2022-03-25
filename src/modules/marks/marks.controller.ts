/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller } from '@nestjs/common';
import { MarkDTO } from 'src/models/dto/marks.dto';
import { MarksService } from 'src/models/services/marks.service';

@Controller()
export class MarksController {


    constructor(
        private marksService: MarksService
    ) { }


   async addMarks(@Body() markDTO:MarkDTO):Promise<any>{

return await this.marksService.addMarks(markDTO);

    }

}
