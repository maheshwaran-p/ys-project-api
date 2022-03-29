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
exports.FillResponseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const fill_entity_1 = require("../entities/fill.entity");
let FillResponseService = class FillResponseService {
    constructor(fillInTheBlanksResponseRepository, fillRespository) {
        this.fillInTheBlanksResponseRepository = fillInTheBlanksResponseRepository;
        this.fillRespository = fillRespository;
    }
    async fillresponse(questionId, studentId, answer) {
        const question = await this.fillRespository.findOne({ id: questionId });
        return this.fillInTheBlanksResponseRepository.save({ questionId: questionId, studentId: studentId, answer: answer, isCorrect: question.answer === answer });
    }
};
FillResponseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fill_entity_1.FillResponse)),
    __param(1, (0, typeorm_1.InjectRepository)(fill_entity_1.FillInTheBlanks)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        Repository_1.Repository])
], FillResponseService);
exports.FillResponseService = FillResponseService;
//# sourceMappingURL=fillintheblanksresponse.service.js.map