import { VideoResponseService } from './../../models/services/video-response.service';
import { VideoResponseController } from './video-response.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';

@Module({
    imports: [ModelsModule],
    controllers: [
        VideoResponseController,],
    providers: [
    ],
})
export class VideoResponseModule { }
