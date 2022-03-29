import { CreateStudentDTO } from 'src/models/dto/create-student.dto';
import { ResetDTO } from 'src/models/dto/reset.dto';
import { Student } from 'src/models/entities/student.entity';
import { StudentService } from 'src/models/services/student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    getCourse(): Promise<Student[]>;
    createStudent(createStudentDTO: CreateStudentDTO): Promise<Student>;
    getStudent(params: any): Promise<Student>;
    resetpassword(resetDTO: ResetDTO): Promise<any>;
}
