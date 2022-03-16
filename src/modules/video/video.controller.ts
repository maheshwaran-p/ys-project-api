/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { VideoQuestionDTO } from 'src/models/dto/video';
import { VideoService } from 'src/models/services/video.service';

@Controller('videoquestion')
export class VideoController {

    constructor(
        private videoService: VideoService

    ) { }


    @Post()
    videoquestion(@Body() videoQuestionDto: VideoQuestionDTO) {

        return this.videoService.videoquestion(videoQuestionDto.course, videoQuestionDto.question);



    }




}
