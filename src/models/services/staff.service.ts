import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDTO } from '../dto/create-staff.dto';
import { Staff } from '../entities/staff.entity';
import { UserService } from './user.service';

@Injectable()
export class StaffService {

  constructor(
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
    private userService: UserService,
  ) { }
  async createStaff(createStaffDTO: CreateStaffDTO): Promise<Staff> {
    let { username, password, email } = createStaffDTO;
    const user = await this.userService.createUser(username, password, email, true);
    let { firstName, lastName } = createStaffDTO;
    return this.staffRepository.save({firstName:firstName,lastName:lastName, user: user });
  }

  getStaffById(id: number): Promise<Staff> {
    return this.staffRepository.findOne({ id: id });
  }
  findStaffByUserId(userId: number): Promise<Staff> {
    return this.staffRepository.findOne({ user: { id: userId } });
  }
}
