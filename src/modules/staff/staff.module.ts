import { StaffService } from './../../models/services/staff.service';
import { StaffController } from './staff.controller';
import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';
import { UtilsService } from 'src/models/services/utils.service';

@Module({
  imports: [ModelsModule],
  controllers: [StaffController],
  providers: [UtilsService],
})
export class StaffModule {}
