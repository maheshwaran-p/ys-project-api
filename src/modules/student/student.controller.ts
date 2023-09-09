
import { Get, Param, Post, Put } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import { CreateStudentDTO } from 'src/models/dto/create-student.dto';
import { ResetDTO } from 'src/models/dto/reset.dto';
import { Student } from 'src/models/entities/student.entity';
import { StudentService } from 'src/models/services/student.service';

@Controller('/student')
export class StudentController {

    constructor(
        private studentService: StudentService
    ) { }

    @Get('/get')
    getCourse(){

        //console.log(params.id);
        return this.studentService.getStudents();
    }

    @Post()
    createStudent(@Body() createStudentDTO: CreateStudentDTO): Promise<Student> {
        return this.studentService.createStudent(createStudentDTO);

    }

    @Get('/get/name/:username')
   async getStudent( @Param() params){

        console.log(params.username);
        return await this.studentService.findStudentByUserName(params.username);
    }


    @Post('/reset')
  async  resetpassword(@Body() resetDTO:ResetDTO):Promise<any>{

    return this.studentService.resetpassword(resetDTO);



        
    }

}

