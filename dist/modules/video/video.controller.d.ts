import { VideoQuestionDTO } from 'src/models/dto/video';
import { VideoService } from 'src/models/services/video.service';
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    videoquestion(videoQuestionDto: VideoQuestionDTO): any;
}
