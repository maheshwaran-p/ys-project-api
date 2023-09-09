import { FormDto } from 'src/models/dto/form.dto';
import { LoginUserDto, SignInUserDto } from 'src/models/dto/login-user.dto';
import { ReportDTO } from 'src/models/dto/report.dto';
import { UserDTO } from 'src/models/dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    pinEnity(req: any): Promise<any>;
    login(loginUserDto: LoginUserDto): Promise<import("./user-context").UserContext>;
    signUp(userDto: UserDTO): Promise<any>;
    signIN(signInUserDto: SignInUserDto): Promise<{
        msg: number;
        data: import("../../models/entities/report.entity").Report[];
        user_id: number;
        user_type: string;
    } | {
        msg: number;
        data?: undefined;
        user_id?: undefined;
        user_type?: undefined;
    }>;
    report(reportDTO: ReportDTO): Promise<any>;
    getAllForms(formDto: FormDto): Promise<any>;
    checkUser(req: any): any;
}
