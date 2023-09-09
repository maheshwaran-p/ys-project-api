/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { VideoResponseDTO } from 'src/models/dto/video';
import { VideoResponseService } from 'src/models/services/video-response.service';

@Controller()
export class VideoResponseController {


    constructor(
        private videoResponseService: VideoResponseService

    ) { }



    @Post()
    videoresponse(@Body() videoResponseDTO: VideoResponseDTO): Promise<any> {


        return this.videoResponseService.videoresponse(videoResponseDTO.questionId, videoResponseDTO.studentId, videoResponseDTO.answer)
    }



}