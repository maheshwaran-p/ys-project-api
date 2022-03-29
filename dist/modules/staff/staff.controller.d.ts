import { CreateStaffDTO } from 'src/models/dto/create-staff.dto';
import { Staff } from 'src/models/entities/staff.entity';
import { StaffService } from 'src/models/services/staff.service';
export declare class StaffController {
    private staffService;
    constructor(staffService: StaffService);
    createStaff(createStaffDTO: CreateStaffDTO): Promise<Staff>;
}
