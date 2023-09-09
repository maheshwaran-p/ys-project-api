import { CourseController } from './course.controller';
import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        CourseController],

})
export class CourseModule { }
