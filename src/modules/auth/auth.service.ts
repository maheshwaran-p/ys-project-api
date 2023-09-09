import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FormDto } from 'src/models/dto/form.dto';
import { SignInUserDto } from 'src/models/dto/login-user.dto';
import { ReportDTO } from 'src/models/dto/report.dto';
import { UserDTO } from 'src/models/dto/user.dto';
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

            console.log('correct');
            const context = new UserContext()
            const payload = { userId: user.id, isStaff: user.isStaff }
            context.userId = user.id;
            context.isStaff = user.isStaff;
            context.username = user.firstname;
            context.accessToken = this.jwtService.sign(payload);
            return context;

        } else {
            throw new UnauthorizedException();
        }
    }
    async register(userDto: UserDTO) {
        // userDto.password = encodeURIComponent(userDto.password)
        const user = await this.userService.rigister(userDto)
        console.log(user);
        return user;
    }

    async signIn(signInUserDto: SignInUserDto) {
        // userDto.password = encodeURIComponent(userDto.password)
        const user = await this.userService.login(signInUserDto)
        console.log(user);
        return user;
    }


    async getAllForm(formDto: FormDto): Promise<any> {
        const forms = await this.userService.getAllForms(formDto)
        return forms
    }
    async saveReport(reportDTO: ReportDTO) {
        return await this.userService.report(reportDTO)
    }

    async populateUserType(isStaff: boolean, userId: number): Promise<any> {
        return isStaff ? await this.staffService.findStaffByUserId(userId)
            : await this.studentService.findStudentByUserId(userId);
    }


}
