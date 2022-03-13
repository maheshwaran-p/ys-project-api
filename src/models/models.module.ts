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
import { MultipleChoiceResponse } from './entities/multiple-choice-response.entity';
import { MatchService } from './services/match.service';
import { MatchEntity } from './entities/match.entity';
import { MatchAnswer } from './entities/match-answer.entity';
import { MatchQuestion } from './entities/match-question.entity';
import { MatchResponse } from './entities/match-response.entity';

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
    TypeOrmModule.forFeature([
      User,
      Staff,
      Student,
      Course,
      MultipleChoice,
      MultipleChoiceResponse,
      MatchEntity,
      MatchAnswer,
      MatchQuestion,
      MatchResponse]),
  ],
  providers: [
    StaffService, UserService, StudentService, UtilsService, MulitpleChoiceService, CourseService, MatchService],
  exports: [StaffService, UserService, StudentService, MulitpleChoiceService, CourseService, MatchService],
})
export class ModelsModule { }
