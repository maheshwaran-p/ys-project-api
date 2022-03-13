import { FillController } from './fill.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        FillController,],
    providers: [],
})
export class FillModule { }
