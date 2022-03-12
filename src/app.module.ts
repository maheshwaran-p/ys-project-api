import { StudentModule } from './modules/student/student.module';
import { UtilsService } from './models/services/utils.service';
import { ModelsModule } from './models/models.module';
import { Module } from '@nestjs/common';
import { StaffController } from './modules/staff/staff.controller';

@Module({
  imports: [
    StudentModule, ModelsModule],
  controllers: [StaffController],
  providers: [UtilsService],
})
export class AppModule { }
