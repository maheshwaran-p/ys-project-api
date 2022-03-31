import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UtilsService } from '../../utils/utils.service';

@Injectable()
export class UserService {
  studentRespository: any;
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private utilsService: UtilsService,
  ) { }

  async createUser(
    username: string,
    password: string,
    email: string,
    isStaff: boolean = false
  ): Promise<User> {

  
   let namecheck = await this.userRepository.findOne({ username: username });

   //console.log(namecheck);

    if(namecheck!=undefined){
      console.log("name already exist");
      return null;
    }
    else{
    const user = this.userRepository.create({
      username: username,
      email: email,
    });


    user.isStaff = isStaff
    user.password = password;
    return this.userRepository.save(user);

  }

  
  }

  async resetPassword(email:string,username:string,password:string) : Promise<any>{

    let reset = await this.userRepository.findOne({email:email});

    if(reset==undefined){
     
    
    return null;
  }

    reset.username=username;
    reset.password=password;

  return await this.userRepository.save(reset);


  }

  findUserByName(username: string): Promise<User | undefined> {

   
    return this.userRepository.findOne({ username: username });

    
  }

}
