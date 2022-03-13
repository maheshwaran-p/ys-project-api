/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { FillInTheBlanks, FillResponse } from './entities/fill.entity';
import { Staff } from './entities/staff.entity';
import { Student } from './entities/student.entity';
import { User } from './entities/user.entity';
import { Video, VideoResponse } from './entities/video.entity';
import { FillintheblanksService } from './services/fillintheblanks.service';
import { FillintheBlanksResponseService } from './services/fillintheblanksresponse.service';
import { StaffService } from './services/staff.service';
import { StudentService } from './services/student.service';
import { UserService } from './services/user.service';
import { UtilsService } from './services/utils.service';
import { VideoResponseService } from './services/video-response.service';
import { VideoService } from './services/video.service';

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
    TypeOrmModule.forFeature([User, Staff, Student, Course, Video, VideoResponse, FillInTheBlanks, FillResponse]),
  ],
  providers: [StaffService, UserService, UtilsService, StudentService, VideoService, VideoResponseService, FillintheblanksService, FillintheBlanksResponseService],
  exports: [StaffService, UserService, UtilsService, StudentService, VideoService, VideoResponseService, FillintheblanksService, FillintheBlanksResponseService],
})
export class ModelsModule { }
