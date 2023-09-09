import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';
import { MultipleChoiceController } from './multiplechoice.controller';

@Module({
    imports: [ModelsModule],
    controllers: [MultipleChoiceController],
    providers: [],
})
export class MultipleChoiceModule { }
