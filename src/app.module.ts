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

@Module({
  imports: [
    MatchModule,
    CourseModule,
    UtilsModule,
    MultipleChoiceModule,
    VideoModule,
    StudentModule, ModelsModule],
  controllers: [
    MatchController,
    MultipleChoiceController,
    VideoController, StaffController,],
  providers: [
    MatchService,],
})
export class AppModule { }
