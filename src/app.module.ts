import { TotalModule } from './modules/total/total.module';
import { TotalService } from './models/services/total.service';
import { MarksModule } from './modules/marks/marks.module';
import { MarksController } from './modules/marks/marks.controller';
import { MarksService } from './models/services/marks.service';
import { AddnotesModule } from './modules/addnotes/addnotes.module';
import { AddnotesService } from './models/services/addnotes.service';
import { AddcourseModule } from './modules/addcourse/addcourse.module';
import { AddCourseService } from './models/services/addcourse.service';
import { OrderresponseModule } from './modules/order-response/orderresponse.module';
import { OrderModule } from './modules/order/order.module';

import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { FillresponseModule } from './modules/fill-in-the-blanks-response/fillresponse.module';
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
import { AuthService } from './modules/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MultipleChoiceController } from './modules/multipleChoice/multiplechoice.controller';
import { AddcourseController } from './modules/addcourse/addcourse.controller';
import { AddnotesController } from './modules/addnotes/addnotes.controller';
import { TotalController } from './modules/total/total.controller';

@Module({
  imports: [
    TotalModule, 
    MarksModule, 
    AddnotesModule, 
    AddcourseModule, 
    OrderresponseModule, 
    OrderModule, 
    AuthModule,
    FillresponseModule,
    FillModule,
    VideoResponseModule,
    VideoModule,
    StudentModule,
    ModelsModule,
    JwtModule.register({
      secret: "ys-secret",
      signOptions: { expiresIn: "7d" }
    })
  ],
  controllers: [
    TotalController,
    MarksController, 
    AddnotesController,
    AddcourseController,
    AuthController,
    StudentController,
    StaffController,
    VideoController,
    MultipleChoiceController,
    VideoResponseController,
    FillController,
    FillresponseController],
  providers: [
      
    AuthService,
  ],
})
export class AppModule { }
