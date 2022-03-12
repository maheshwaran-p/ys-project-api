import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MultipleChoiceResponseDTO } from 'src/models/dto/multiple-choice-response.dto';
import { MultipleChoiceDTO } from 'src/models/dto/multiple-choice.dto';
import { MulitpleChoiceService } from 'src/models/services/mulitplechoice.service';

@Controller('/course/:courseId/mcq')
export class MultipleChoiceController {
    constructor(
        private multipleChoiceService: MulitpleChoiceService
    ) { }
    @Put()
    createMultipleChoice(@Body() multipleChoiceDTO: MultipleChoiceDTO[], @Param('courseId') courseId: number) {
        return this.multipleChoiceService.createMultipleChoice(courseId, multipleChoiceDTO);
    }

    @Put('/:studentId/response')
    createMultipleChoiceResponse(
        @Body() multipleChoiceResponseDTO: MultipleChoiceResponseDTO[],
        @Param('studentId') studentId: number,
    ) {
        return this.multipleChoiceService.createMulitpleChoiceResponse(multipleChoiceResponseDTO, studentId);
    }

}
