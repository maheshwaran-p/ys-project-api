import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UtilsService } from '../../utils/utils.service';
import { UserDTO } from '../dto/user.dto';
import { SignInUserDto } from '../dto/login-user.dto';
import { Report } from '../entities/report.entity';
import { ReportDTO } from '../dto/report.dto';
import { FormDto } from '../dto/form.dto';
export declare class UserService {
    private userRepository;
    private reportRepository;
    private utilsService;
    studentRespository: any;
    constructor(userRepository: Repository<User>, reportRepository: Repository<Report>, utilsService: UtilsService);
    createUser(username: string, password: string, email: string, isStaff?: boolean): Promise<User>;
    getAllForms(formDto: FormDto): Promise<any>;
    resetPassword(email: string, username: string, password: string): Promise<any>;
    findUserByName(username: string): Promise<User | undefined>;
    rigister(userDto: UserDTO): Promise<any>;
    login(signInUserDto: SignInUserDto): Promise<{
        msg: number;
        data: Report[];
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
    report(reportDTO: ReportDTO): Promise<any>;
}
