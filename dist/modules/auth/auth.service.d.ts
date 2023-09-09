import { JwtService } from '@nestjs/jwt';
import { FormDto } from 'src/models/dto/form.dto';
import { SignInUserDto } from 'src/models/dto/login-user.dto';
import { ReportDTO } from 'src/models/dto/report.dto';
import { UserDTO } from 'src/models/dto/user.dto';
import { StaffService } from 'src/models/services/staff.service';
import { StudentService } from 'src/models/services/student.service';
import { UserService } from 'src/models/services/user.service';
import { UserContext } from './user-context';
export declare class AuthService {
    private userService;
    private jwtService;
    private staffService;
    private studentService;
    constructor(userService: UserService, jwtService: JwtService, staffService: StaffService, studentService: StudentService);
    login(username: string, password: string): Promise<UserContext>;
    register(userDto: UserDTO): Promise<any>;
    signIn(signInUserDto: SignInUserDto): Promise<{
        msg: number;
        data: import("../../models/entities/report.entity").Report[];
        user_id: number;
        user_type: string;
        user_name: string;
    } | {
        msg: number;
        data?: undefined;
        user_id?: undefined;
        user_type?: undefined;
        user_name?: undefined;
    }>;
    getAllForm(formDto: FormDto): Promise<any>;
    saveReport(reportDTO: ReportDTO): Promise<any>;
    populateUserType(isStaff: boolean, userId: number): Promise<any>;
}
