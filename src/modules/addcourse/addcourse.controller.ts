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
  async  getcourses(
        addCourseDTO:AddCourseDTO
      
    ) {
       
        return await this.addCourseService.getAllCourses();
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

    @Post('edit/:id')
    async editCourse(@Param() params, @Body() addCourseDTO:AddCourseDTO ):Promise<any>{
        return await this.addCourseService.editCourse(addCourseDTO.title,addCourseDTO.description,addCourseDTO.course,addCourseDTO.stafflink,params.id);

    }

    @Get('edit/get/:id')
async findinEdit(@Param() params ){

    return await this.addCourseService.findinEdit(params.id);
}

   

@Get('delete/:id')
  async  deleteCourse(@Param() params){

        console.log(params.id);
        return await this.addCourseService.deleteOneCourse(params.id);
    }

    @Get('validate/:id')
  async  getCourse(@Param() params){

        console.log(params.id);
        return await this.addCourseService.getCourse(params.id);
    }

@Get('total/get/:id')
async getTotal(@Param() params ){

    return await this.addCourseService.getTotal(params.id);
}

    @Post('/total/:id')
  async  updateTotal(@Param() params , @Body() addCourseDTO:AddCourseDTO ):Promise<any>{

        // console.log(params.id);
        return await this.addCourseService.updateTotal(params.id,addCourseDTO.total);

    }


}
