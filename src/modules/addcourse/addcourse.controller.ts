/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddCourseDTO } from 'src/models/dto/addcourse.dto';
import { AddCourseService } from 'src/models/services/addcourse.service';

@Controller('/addcourse')
export class AddcourseController {

    constructor(
        private addCourseService: AddCourseService
    ) { }



    @Get('/response')
    getcourses(
        addCourseDTO:AddCourseDTO
      
    ) {
       
        return this.addCourseService.getcourses();
    }

    
    @Post()
    async addCourse( @Body() addCourseDTO:AddCourseDTO ):Promise<any>{

        return await this.addCourseService.createCourse(addCourseDTO.title,addCourseDTO.description,addCourseDTO.course,addCourseDTO.stafflink);

    }

}
