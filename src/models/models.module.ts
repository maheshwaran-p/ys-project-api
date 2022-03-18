import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { AddCourse } from './entities/addcourse.entity';
import { AddNotes } from './entities/addnotes.entity';
import { CourseResponse } from './entities/course-reponse.entity';
import { Course } from './entities/course.entity';
import { FillInTheBlanks, FillResponse } from './entities/fill.entity';
import { MatchAnswer } from './entities/match-answer.entity';
import { MatchQuestion } from './entities/match-question.entity';
import { MatchResponse } from './entities/match-response.entity';
import { MatchEntity } from './entities/match.entity';
import { MultipleChoiceResponse } from './entities/multiple-choice-response.entity';
import { MultipleChoice } from './entities/multiple-choice.entity';
import { Order, OrderResponse } from './entities/order.entity';
import { Staff } from './entities/staff.entity';
import { Student } from './entities/student.entity';
import { User } from './entities/user.entity';
import { Video, VideoResponse } from './entities/video.entity';
import { AddCourseService } from './services/addcourse.service';
import { AddnotesService } from './services/addnotes.service';
import { CourseService } from './services/course.service';
import { FillintheblanksService } from './services/fillintheblanks.service';
import { FillResponseService } from './services/fillintheblanksresponse.service';
import { MatchService } from './services/match.service';
import { MulitpleChoiceService } from './services/mulitplechoice.service';
import { OrderService } from './services/order.service';
import { OrderresponseService } from './services/orderresponse.service';
import { StaffService } from './services/staff.service';
import { StudentService } from './services/student.service';
import { UserService } from './services/user.service';
import { VideoResponseService } from './services/video-response.service';
import { VideoService } from './services/video.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      database: 'newys',
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
      MatchResponse,
      FillInTheBlanks,
      FillResponse,
      VideoResponse,
      Video,
      CourseResponse,
      Order,
      OrderResponse,
      AddCourse,
      AddNotes
    ]),
  ],
  providers: [
    StaffService,
    UserService,
    StudentService,
    UtilsService,
    MulitpleChoiceService,
    CourseService,
    MatchService,
    VideoResponseService,
    FillResponseService,
    VideoService,
    FillintheblanksService,
    OrderService,
    OrderresponseService,
    AddCourseService,
    AddnotesService
  ],
  exports: [
    StaffService,
    UserService,
    StudentService,
    MulitpleChoiceService,
    CourseService,
    MatchService,
    VideoResponseService,
    VideoService,
    FillResponseService,
    FillintheblanksService,
    OrderService,
    OrderresponseService,
    AddCourseService,
    AddnotesService
  ],
})
export class ModelsModule { }
