import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/entities/user.entity';
import { StaffService } from 'src/models/services/staff.service';
import { StudentService } from 'src/models/services/student.service';
import { UserService } from 'src/models/services/user.service';
import { UserContext } from './user-context';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService,
        private staffService: StaffService,
        private studentService: StudentService) { }

    async login(username: string, password: string): Promise<UserContext> {
        const user = await this.userService.findUserByName(username);
        if (user && user.password === password) {
            const context = new UserContext()
            const payload = { userId: user.id, isStaff: user.isStaff }
            context.userId = user.id;
            context.isStaff = user.isStaff;
            context.accessToken = this.jwtService.sign(payload);
            return context;

        } else {
            throw new UnauthorizedException();
        }
    }

    async populateUserType(isStaff: boolean, userId: number): Promise<any> {
        return isStaff ? await this.staffService.findStaffByUserId(userId)
            : await this.studentService.findStudentByUserId(userId);
    }


}
