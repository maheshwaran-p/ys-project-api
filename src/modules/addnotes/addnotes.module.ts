import { AddnotesController } from './addnotes.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        AddnotesController, ],
    providers: [],
})
export class AddnotesModule {}
