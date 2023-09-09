/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Video } from '../entities/video.entity';

@Injectable()
export class VideoService {


    constructor(
        @InjectRepository(Video)
        private videoRespository: Repository<Video>,

    ) { }


   async videoquestion(courseId: number, question: string): Promise<any> {

        return await this.videoRespository.save({ courseId: courseId, question: question });

    }


}
