import { MatchService } from './models/services/match.service';
import { MatchModule } from './modules/match/match.module';
import { MatchController } from './modules/match/match.controller';
import { CourseModule } from './modules/course/course.module';
import { UtilsModule } from './utils/utils.module';
import { MultipleChoiceModule } from './modules/multipleChoice/multiplechoice.module';
import { MultipleChoiceController } from './modules/multipleChoice/multiplechoice.controller';
import { VideoModule } from './modules/video/video.module';
import { VideoController } from './modules/video/video.controller';
import { StudentModule } from './modules/student/student.module';
import { ModelsModule } from './models/models.module';
import { Module } from '@nestjs/common';
import { StaffController } from './modules/staff/staff.controller';
import { FillModule } from './modules/fill-in-the-blanks/fill.module';
import { FillresponseModule } from './modules/fill-in-the-blanks-response/fillresponse.module';
import { VideoResponseModule } from './modules/video-response/video-response.module';
import { VideoResponseController } from './modules/video-response/video-response.controller';
import { FillController } from './modules/fill-in-the-blanks/fill.controller';
import { FillresponseController } from './modules/fill-in-the-blanks-response/fillresponse.controller';
import { StudentController } from './modules/student/student.controller';

@Module({
  imports: [
    FillresponseModule,
    FillModule,
    VideoModule,
    VideoResponseModule,
    MatchModule,
    CourseModule,
    UtilsModule,
    MultipleChoiceModule,
    StudentModule,
    ModelsModule],
  controllers: [
    MatchController,
    MultipleChoiceController,
    StudentController,
    StaffController,
    VideoController,
    VideoResponseController,
    FillController,
    FillresponseController
  ],
  providers: [],
})
export class AppModule { }
