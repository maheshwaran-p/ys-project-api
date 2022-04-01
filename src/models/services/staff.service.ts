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
    if(user==null){
      console.log('cannot create staff');
      let dummy= new Staff();
     
      dummy.user=null;
     
      return dummy;
    }
    else{
      return this.staffRepository.save({ user: user });

    }

   
  }

  getStaffById(id: number): Promise<Staff> {
    return this.staffRepository.findOne({ id: id });
  }
  findStaffByUserId(userId: number): Promise<Staff> {
    return this.staffRepository.findOne({ user: { id: userId } });
  }
}