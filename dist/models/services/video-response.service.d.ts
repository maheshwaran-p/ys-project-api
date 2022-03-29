import { Repository } from 'typeorm/repository/Repository';
import { VideoResponse } from '../entities/video.entity';
export declare class VideoResponseService {
    private videoResponseRespository;
    constructor(videoResponseRespository: Repository<VideoResponse>);
    videoresponse(questionId: number, studentId: number, answer: string): Promise<any>;
}
