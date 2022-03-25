
import { Get, Param, Post, Put } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import { CreateStudentDTO } from 'src/models/dto/create-student.dto';
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

}
