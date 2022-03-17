import { AddcourseController } from './addcourse.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        AddcourseController, ],
    providers: [],
})
export class AddcourseModule {}
