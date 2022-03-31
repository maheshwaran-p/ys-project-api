import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStaffDTO } from '../dto/create-staff.dto';
import { CreateStudentDTO } from '../dto/create-student.dto';
import { Student } from '../entities/student.entity';
import { UserService } from './user.service';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRespository: Repository<Student>,
        private userService: UserService,
    ) { }

  async getStudents(){

    return await this.studentRespository.find();
  }

    async createStudent(createStudentDTO: CreateStudentDTO): Promise<Student> {

        let { username, password, email } = createStudentDTO;
        const user = await this.userService.createUser(username, password, email);
        if(user==null){
          console.log('cannot create student');
          
        }
     
        let { firstName, lastName } = createStudentDTO;
       return this.studentRespository.save({ firstName: firstName, lastName: lastName,username:username, user: user });
      
      }
      

      

    


    async findStudentByUserId(userId: number): Promise<Student> {
        return this.studentRespository.findOne({ user: { id: userId } })
    }

    async findStudentByUserName(username: string): Promise<Student> {

       console.log(await this.studentRespository.findOne({username }));
      return await this.studentRespository.findOne({username });
      

  }

  async resetpassword(resetDTO:any):Promise<any>{

    

    return await this.userService.resetPassword(resetDTO.email,resetDTO.username,resetDTO.password);


  }
}