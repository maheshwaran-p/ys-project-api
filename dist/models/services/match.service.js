"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const match_answer_entity_1 = require("../entities/match-answer.entity");
const match_question_entity_1 = require("../entities/match-question.entity");
const match_response_entity_1 = require("../entities/match-response.entity");
const match_entity_1 = require("../entities/match.entity");
let MatchService = class MatchService {
    constructor(matchRepository, matchAnswerRepository, matchQuestionRepository, matchResponseRepository) {
        this.matchRepository = matchRepository;
        this.matchAnswerRepository = matchAnswerRepository;
        this.matchQuestionRepository = matchQuestionRepository;
        this.matchResponseRepository = matchResponseRepository;
    }
    async createMatch(matchDTOs, courseId) {
        const matchEntity = await this.matchRepository.save({ course: { id: courseId } });
        for (const e of matchDTOs) {
            const answer = await this.matchAnswerRepository.save({ answer: e.answer });
            await this.matchQuestionRepository.save({ question: e.question, answer: answer, match: matchEntity });
        }
        return matchEntity;
    }
    createMatchReponse(matchResponseDTOs, studentId) {
        const query = this.matchResponseRepository.createQueryBuilder()
            .insert()
            .into(match_response_entity_1.MatchResponse)
            .values(matchResponseDTOs.map(e => ({
            answer: { id: e.answerId },
            question: { id: e.questionId },
            student: { id: studentId }
        })));
        return query.execute();
    }
};
MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(match_entity_1.MatchEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(match_answer_entity_1.MatchAnswer)),
    __param(2, (0, typeorm_1.InjectRepository)(match_question_entity_1.MatchQuestion)),
    __param(3, (0, typeorm_1.InjectRepository)(match_response_entity_1.MatchResponse)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MatchService);
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map