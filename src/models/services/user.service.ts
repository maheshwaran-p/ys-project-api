import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UtilsService } from './utils.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private utilsService: UtilsService,
  ) {}

  async createUser(
    username: string,
    password: string,
    email: string,
  ): Promise<User> {
    const user = this.userRepository.create({
      username: username,
      email: email,
    });
    user['password'] = 'password';
    user['token'] = '#1234abcde';
    return this.userRepository.save(user);
  }
}
