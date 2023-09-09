import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { User, UserType } from '../entities/user.entity';
import { UtilsService } from '../../utils/utils.service';
import { UserDTO } from '../dto/user.dto';
import { SignInUserDto } from '../dto/login-user.dto';
import { Report } from '../entities/report.entity';
import { ReportDTO } from '../dto/report.dto';
import { FormDto } from '../dto/form.dto';

@Injectable()
export class UserService {
  studentRespository: any;
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
    private utilsService: UtilsService,
  ) { }

  async createUser(
    username: string,
    password: string,
    email: string,
    isStaff: boolean = false
  ): Promise<User> {


    let namecheck = await this.userRepository.findOne({ firstname: username });

    //console.log(namecheck);

    if (namecheck != undefined) {
      console.log("name already exist");
      return null;
    }
    else {

      const user = this.userRepository.create({
        firstname: username,
        email: email,
      });


      user.isStaff = isStaff
      user.password = password;
      return this.userRepository.save(user);

    }



  }

  async getAllForms(formDto: FormDto): Promise<any> {
    return await this.reportRepository.find({ status: formDto.status, type: formDto.type });
  }



  async resetPassword(email: string, username: string, password: string): Promise<any> {

    let reset = await this.userRepository.findOne({ email: email });

    if (reset == undefined) {


      return null;
    }

    reset.firstname = username;
    reset.password = password;

    return await this.userRepository.save(reset);


  }

  async findUserByName(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ firstname: username });
  }


  async rigister(userDto: UserDTO): Promise<any> {

    let user = await this.userRepository.findOne({ mobileNumber: userDto.mobileNumber });
    console.log(user)

    if (user == undefined) {
      const user = await this.userRepository.save(userDto)
      let ids = [];
      if (userDto.userType = '0') {
        ids.push(UserType.BENEFICIARY);
      }
      else if (userDto.userType = '1') {
        ids.push(UserType.BENEFICIARY);
        ids.push(UserType.PROJECT_STAFF);
      }
      if (userDto.userType = '2') {
        ids.push(UserType.BENEFICIARY);
        ids.push(UserType.PROJECT_STAFF);
        ids.push(UserType.HQ_STAFF);
      }
      const reports = await this.reportRepository.find({ where: { status: 'submitted' } })
      console.log(reports)
      return {
        'msg': 1,
        data: reports,
        user_id: user.id,
        user_type: user.userType
      }
    }
    else {
      return { 'msg': 0 }
    }

  }

  async login(signInUserDto: SignInUserDto) {
    let user = await this.userRepository.findOne({ mobileNumber: signInUserDto.mobileNumber });

    //console.log(namecheck);


    if (user && user.password == signInUserDto.password) {
      let ids = [];
      if (user.userType == '0') {
        ids.push(UserType.BENEFICIARY);
      }
      else if (user.userType == '1') {
        ids.push(UserType.BENEFICIARY);
        ids.push(UserType.PROJECT_STAFF);
      }
      else if (user.userType == '2') {
        ids.push(UserType.BENEFICIARY);
        ids.push(UserType.PROJECT_STAFF);
        ids.push(UserType.HQ_STAFF);
      }
      const reports = await this.reportRepository.find({ where: { status: 'submitted', } })
      console.log(reports)
      return {
        'msg': 1,
        data: reports,
        user_id: user.id,
        user_type: user.userType
      }
      // return { 'msg': 1 };
    }
    else {
      return { 'msg': 0 };
    }
  }

  async report(reportDTO: ReportDTO): Promise<any> {
    await this.reportRepository.save(reportDTO);
    console.log(1)
    return { msg: 1 }
  }


}
