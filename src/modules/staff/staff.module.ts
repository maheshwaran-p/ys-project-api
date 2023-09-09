import { StaffController } from './staff.controller';
import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
  imports: [ModelsModule],
  controllers: [StaffController],
})
export class StaffModule { }
