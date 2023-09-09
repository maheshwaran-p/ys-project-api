import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';
import { MatchController } from './match.controller';

@Module({
    imports: [ModelsModule],
    controllers: [MatchController],
    providers: [],
})
export class MatchModule { }
