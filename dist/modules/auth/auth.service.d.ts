import { JwtService } from '@nestjs/jwt';
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
    populateUserType(isStaff: boolean, userId: number): Promise<any>;
}
