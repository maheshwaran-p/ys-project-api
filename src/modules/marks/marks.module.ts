/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';
import { MarksController } from './marks.controller';

@Module({
    imports: [ModelsModule],
    controllers: [MarksController],
    providers: [],
})
export class MarksModule {}
