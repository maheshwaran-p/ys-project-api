import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UtilsService } from '../../utils/utils.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private utilsService: UtilsService,
  ) { }

  async createUser(
    username: string,
    password: string,
    email: string,
    isStaff: boolean = true
  ): Promise<User> {
    const user = this.userRepository.create({
      username: username,
      email: email,
    });
    user.isStaff = isStaff
    user.password = 'password';
    return this.userRepository.save(user);
  }

  findUserByName(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ username: username });

  }

}
