import { Body } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MatchDTO, MatchResponseDTO } from 'src/models/dto/match.dto';
import { MatchService } from 'src/models/services/match.service';

@Controller('/course/:courseId/match')
export class MatchController {
    constructor(
        private matchService: MatchService
    ) { }

    @Put()
    createMatch(@Body() matchDTOs: MatchDTO[], @Param('courseId') courseId: number) {
        return this.matchService.createMatch(matchDTOs, courseId);

    }
    @Put('/:studentId/response')
    createMatchResponse(@Body() matchResponseDTOs: MatchResponseDTO[], @Param('studentId') studentId: number) {

        return this.matchService.createMatchReponse(matchResponseDTOs, studentId);
    }

}
