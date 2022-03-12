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
import { UtilsModule } from 'src/utils/utils.module';
import { MulitpleChoiceService } from './services/mulitplechoice.service';
import { MultipleChoice } from './entities/multiple-choice.entity';
import { CourseService } from './services/course.service';

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
    TypeOrmModule.forFeature([User, Staff, Student, Course, MultipleChoice]),
  ],
  providers: [StaffService, UserService, StudentService, UtilsService, MulitpleChoiceService, CourseService],
  exports: [StaffService, UserService, StudentService, MulitpleChoiceService, CourseService],
})
export class ModelsModule { }
