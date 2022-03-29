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
exports.MulitpleChoiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const multiple_choice_response_entity_1 = require("../entities/multiple-choice-response.entity");
const multiple_choice_entity_1 = require("../entities/multiple-choice.entity");
let MulitpleChoiceService = class MulitpleChoiceService {
    constructor(mutipleChoiceRepository, multipleChoiceResponseRepository) {
        this.mutipleChoiceRepository = mutipleChoiceRepository;
        this.multipleChoiceResponseRepository = multipleChoiceResponseRepository;
    }
    async createMultipleChoice(courseId, questions) {
        const query = this.mutipleChoiceRepository.createQueryBuilder()
            .insert()
            .into(multiple_choice_entity_1.MultipleChoice)
            .values(questions.map(e => ({
            question: e.question,
            answer: e.answer,
            choiceOne: e.choiceOne,
            choiceTwo: e.choiceTwo,
            choiceThree: e.choiceThree,
            course: { id: courseId }
        })));
        return query.execute();
    }
    async createMulitpleChoiceResponse(multipleChoiceResponseDTO, studentId) {
        let items = [];
        for (let each of multipleChoiceResponseDTO) {
            items.push({
                answer: each.answer,
                questionId: each.questionId,
                isCorrect: each.answer === (await this.mutipleChoiceRepository.findOne({ id: each.questionId })).answer
            });
        }
        const query = this.multipleChoiceResponseRepository.createQueryBuilder()
            .insert()
            .into(multiple_choice_response_entity_1.MultipleChoiceResponse)
            .values(items.map(e => ({ answer: e.answer, question: { id: e.questionId }, student: { id: studentId }, isCorrect: e.isCorrect })));
        return query.execute();
    }
    async getMultipleChoice(courseId) {
        return await this.mutipleChoiceRepository.find({ course: { id: courseId } });
    }
    async getMultipleChoiceResponse(courseId, studentId) {
        return await this.multipleChoiceResponseRepository.find({ relations: ['question'], where: { student: studentId, question: { course: { id: courseId } } } });
    }
};
MulitpleChoiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(multiple_choice_entity_1.MultipleChoice)),
    __param(1, (0, typeorm_1.InjectRepository)(multiple_choice_response_entity_1.MultipleChoiceResponse)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MulitpleChoiceService);
exports.MulitpleChoiceService = MulitpleChoiceService;
//# sourceMappingURL=mulitplechoice.service.js.map