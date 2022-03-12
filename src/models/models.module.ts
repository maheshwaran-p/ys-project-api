/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Staff } from './entities/staff.entity';
import { Student } from './entities/student.entity';
import { User } from './entities/user.entity';
import { StaffService } from './services/staff.service';
import { StudentService } from './services/student.service';
import { UserService } from './services/user.service';
import { UtilsService } from '../utils/utils.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'ysprojectdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Staff, Student, Course]),
  ],
  providers: [StaffService, UserService, UtilsService, StudentService],
  exports: [StaffService, UserService, UtilsService, StudentService],
})
export class ModelsModule { }
