import { Controller } from '@nestjs/common';
import { MatchService } from 'src/models/services/match.service';

@Controller()
export class MatchController {
    constructor(
        private matchService: MatchService
    ) { }





}
