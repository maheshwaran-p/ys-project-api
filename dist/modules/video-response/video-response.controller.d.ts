import { VideoResponseDTO } from 'src/models/dto/video';
import { VideoResponseService } from 'src/models/services/video-response.service';
export declare class VideoResponseController {
    private videoResponseService;
    constructor(videoResponseService: VideoResponseService);
    videoresponse(videoResponseDTO: VideoResponseDTO): Promise<any>;
}
