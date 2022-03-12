import { VideoModule } from './modules/video/video.module';
import { VideoController } from './modules/video/video.controller';
import { StudentModule } from './modules/student/student.module';
import { UtilsService } from './models/services/utils.service';
import { ModelsModule } from './models/models.module';
import { Module } from '@nestjs/common';
import { StaffController } from './modules/staff/staff.controller';

@Module({
  imports: [
    VideoModule,
    StudentModule, ModelsModule],
  controllers: [
    VideoController, StaffController],
  providers: [UtilsService],
})
export class AppModule { }
