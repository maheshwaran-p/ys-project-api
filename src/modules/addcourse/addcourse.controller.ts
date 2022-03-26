/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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
       
        return this.addCourseService.getAllCourses();
    }

    
 @Get(':id')
findOne(@Param() params) {
    console.log(params.id);

  return this.addCourseService.findOneCourse(params.id);

}
    @Post()
    async addCourse( @Body() addCourseDTO:AddCourseDTO ):Promise<any>{
        return await this.addCourseService.createCourse(addCourseDTO.title,addCourseDTO.description,addCourseDTO.course,addCourseDTO.stafflink);

    }


   

    @Get('delete/:id')
    deleteCourse(@Param() params){

        console.log(params.id);
        return this.addCourseService.deleteOneCourse(params.id);
    }

    @Get('validate/:id')
    getCourse(@Param() params){

        console.log(params.id);
        return this.addCourseService.getCourse(params.id);
    }



}
