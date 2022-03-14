import { Param } from '@nestjs/common';
import { Body, Request } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MultipleChoiceResponseDTO } from 'src/models/dto/multiple-choice-response.dto';
import { MultipleChoiceDTO } from 'src/models/dto/multiple-choice.dto';
import { MulitpleChoiceService } from 'src/models/services/mulitplechoice.service';
import { JwtGaurd } from '../auth/jwt.guard';

@Controller('/course/:courseId/mcq')
export class MultipleChoiceController {
    constructor(
        private multipleChoiceService: MulitpleChoiceService
    ) { }
    @Put()
    createMultipleChoice(@Body() multipleChoiceDTO: MultipleChoiceDTO[], @Param('courseId') courseId: number) {
        return this.multipleChoiceService.createMultipleChoice(courseId, multipleChoiceDTO);
    }

    @UseGuards(JwtGaurd)
    @Put('/response')
    createMultipleChoiceResponse(
        @Request() req,
        @Body() multipleChoiceResponseDTO: MultipleChoiceResponseDTO[],
    ) {
        const student = req.user.userCtx;
        return this.multipleChoiceService.createMulitpleChoiceResponse(
            multipleChoiceResponseDTO,
            student.id
        );
    }

}
