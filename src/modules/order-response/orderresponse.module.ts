import { OrderresponseController } from './orderresponse.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        OrderresponseController, ],
    providers: [],
})
export class OrderresponseModule {}
