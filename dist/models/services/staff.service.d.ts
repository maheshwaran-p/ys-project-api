import { Repository } from 'typeorm';
import { CreateStaffDTO } from '../dto/create-staff.dto';
import { Staff } from '../entities/staff.entity';
import { UserService } from './user.service';
export declare class StaffService {
    private staffRepository;
    private userService;
    constructor(staffRepository: Repository<Staff>, userService: UserService);
    createStaff(createStaffDTO: CreateStaffDTO): Promise<Staff>;
    getStaffById(id: number): Promise<Staff>;
    findStaffByUserId(userId: number): Promise<Staff>;
}
