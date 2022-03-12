import { VideoService } from './../../models/services/video.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        VideoService,],
})
export class VideoModule { }
