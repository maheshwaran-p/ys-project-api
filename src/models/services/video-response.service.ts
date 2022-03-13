/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { VideoResponse } from '../entities/video.entity';

@Injectable()
export class VideoResponseService {

    constructor(
        @InjectRepository(VideoResponse)
        private videoResponseRespository: Repository<VideoResponse>,

    ) { }


    videoresponse(questionId: number, studentId: number, answer: string): Promise<any> {

        return this.videoResponseRespository.save({ questionId: questionId, studentId: studentId, answer: answer });

    }



}
