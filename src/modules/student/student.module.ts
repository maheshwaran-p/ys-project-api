import { StudentController } from './student.controller';
import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        StudentController,],
    providers: [
    ],
})
export class StudentModule { }
