import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UtilsService } from '../../utils/utils.service';
export declare class UserService {
    private userRepository;
    private utilsService;
    studentRespository: any;
    constructor(userRepository: Repository<User>, utilsService: UtilsService);
    createUser(username: string, password: string, email: string, isStaff?: boolean): Promise<User>;
    resetPassword(email: string, username: string, password: string): Promise<any>;
    findUserByName(username: string): Promise<User | undefined>;
}
