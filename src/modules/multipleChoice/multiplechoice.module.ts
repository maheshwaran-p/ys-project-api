import { Module } from '@nestjs/common';
import { MultipleChoiceController } from './multiplechoice.controller';

@Module({
    imports: [],
    controllers: [MultipleChoiceController],
    providers: [],
})
export class MultipleChoiceModule { }
