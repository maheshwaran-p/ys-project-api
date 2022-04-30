import { TotalModule } from './modules/total/total.module';
import { MarksModule } from './modules/marks/marks.module';
import { MarksController } from './modules/marks/marks.controller';
import { AddnotesModule } from './modules/addnotes/addnotes.module';
import { AddcourseModule } from './modules/addcourse/addcourse.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { StudentModule } from './modules/student/student.module';
import { ModelsModule } from './models/models.module';
import { Module } from '@nestjs/common';
import { StaffController } from './modules/staff/staff.controller';
import { StudentController } from './modules/student/student.controller';
import { AuthService } from './modules/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AddcourseController } from './modules/addcourse/addcourse.controller';
import { AddnotesController } from './modules/addnotes/addnotes.controller';
import { TotalController } from './modules/total/total.controller';

@Module({
  imports: [
    TotalModule, 
    MarksModule, 
    AddnotesModule, 
    AddcourseModule, 
    // OrderModule, 
    AuthModule,
    // OrderresponseModule, 
    // FillresponseModule,
    // FillModule,
    // VideoResponseModule,
    // VideoModule,
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
  ],
  providers: [
      
    AuthService,
  ],
})
export class AppModule { }
