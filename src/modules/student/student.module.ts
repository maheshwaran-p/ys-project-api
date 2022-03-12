import { StudentService } from './../../models/services/student.service';
import { StudentController } from './student.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        StudentController,],
})
export class StudentModule { }
