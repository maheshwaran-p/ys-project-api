import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';
import { VideoController } from './video.controller';

@Module({
    imports: [ModelsModule],
    controllers: [VideoController],
    providers: [
    ],
})
export class VideoModule { }