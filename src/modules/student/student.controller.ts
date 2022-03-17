
import { Post, Put } from '@nestjs/common';
import { Body, Controller } from '@nestjs/common';
import { CreateStudentDTO } from 'src/models/dto/create-student.dto';
import { Student } from 'src/models/entities/student.entity';
import { StudentService } from 'src/models/services/student.service';

@Controller('/student')
export class StudentController {

    constructor(
        private studentService: StudentService
    ) { }
    @Post()
    createStudent(@Body() createStudentDTO: CreateStudentDTO): Promise<Student> {
        return this.studentService.createStudent(createStudentDTO);

    }

}
