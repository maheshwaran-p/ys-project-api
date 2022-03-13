import { FillresponseController } from './fillresponse.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        FillresponseController,],
    providers: [],
})
export class FillresponseModule { }
