import { Repository } from 'typeorm/repository/Repository';
import { Video } from '../entities/video.entity';
export declare class VideoService {
    private videoRespository;
    constructor(videoRespository: Repository<Video>);
    videoquestion(courseId: number, question: string): Promise<any>;
}
