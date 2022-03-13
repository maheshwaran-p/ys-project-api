import { FillintheBlanksResponseService } from './models/services/fillintheblanksresponse.service';
import { FillresponseModule } from './modules/fill-in-the-blanks-response/fillresponse.module';
import { FillintheblanksService } from './models/services/fillintheblanks.service';
import { FillModule } from './modules/fill-in-the-blanks/fill.module';
import { VideoResponseModule } from './modules/video-response/video-response.module';
import { VideoModule } from './modules/video/video.module';
import { VideoController } from './modules/video/video.controller';
import { StudentModule } from './modules/student/student.module';
import { ModelsModule } from './models/models.module';
import { Module } from '@nestjs/common';
import { StaffController } from './modules/staff/staff.controller';
import { FillController } from './modules/fill-in-the-blanks/fill.controller';
import { VideoResponseController } from './modules/video-response/video-response.controller';
import { StudentController } from './modules/student/student.controller';
import { FillresponseController } from './modules/fill-in-the-blanks-response/fillresponse.controller';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [
    FillresponseModule,
    FillModule,
    VideoResponseModule,
    VideoModule,
    StudentModule, ModelsModule],
  controllers: [
    StudentController, StaffController, VideoController, VideoResponseController, FillController, FillresponseController],
  providers: [
    UtilsService],
})
export class AppModule { }
