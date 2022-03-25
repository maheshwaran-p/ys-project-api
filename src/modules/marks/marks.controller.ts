/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { MarksService } from 'src/models/services/marks.service';

@Controller()
export class MarksController {


    constructor(
        private marksService: MarksService
    ) { }


   async addMarks(){

    


    }

}
