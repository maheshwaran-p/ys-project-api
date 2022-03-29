import { Repository } from 'typeorm';
import { CreateStudentDTO } from '../dto/create-student.dto';
import { Student } from '../entities/student.entity';
import { UserService } from './user.service';
export declare class StudentService {
    private studentRespository;
    private userService;
    constructor(studentRespository: Repository<Student>, userService: UserService);
    getStudents(): Promise<Student[]>;
    createStudent(createStudentDTO: CreateStudentDTO): Promise<Student>;
    findStudentByUserId(userId: number): Promise<Student>;
    findStudentByUserName(username: string): Promise<Student>;
    resetpassword(resetDTO: any): Promise<any>;
}
