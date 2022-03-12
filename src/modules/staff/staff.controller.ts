import { Body, Controller, Post } from '@nestjs/common';
import { CreateStaffDTO } from 'src/models/dto/create-staff.dto';
import { Staff } from 'src/models/entities/staff.entity';
import { StaffService } from 'src/models/services/staff.service';

@Controller('/staff')
export class StaffController {
  constructor(private staffService: StaffService) { }

  @Post()
  createStaff(@Body() createStaffDTO: CreateStaffDTO): Promise<Staff> {
    return this.staffService.createStaff(createStaffDTO);
  }


}
