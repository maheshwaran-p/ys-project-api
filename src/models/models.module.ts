import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { Course } from './entities/course.entity';
import { MatchAnswer } from './entities/match-answer.entity';
import { MatchQuestion } from './entities/match-question.entity';
import { MatchResponse } from './entities/match-response.entity';
import { MatchEntity } from './entities/match.entity';
import { MultipleChoiceResponse } from './entities/multiple-choice-response.entity';
import { MultipleChoice } from './entities/multiple-choice.entity';
import { Staff } from './entities/staff.entity';
import { Student } from './entities/student.entity';
import { User } from './entities/user.entity';
import { CourseService } from './services/course.service';
import { MatchService } from './services/match.service';
import { MulitpleChoiceService } from './services/mulitplechoice.service';
import { StaffService } from './services/staff.service';
import { StudentService } from './services/student.service';
import { UserService } from './services/user.service';

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
