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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResponse = void 0;
const typeorm_1 = require("typeorm");
const match_answer_entity_1 = require("./match-answer.entity");
const match_question_entity_1 = require("./match-question.entity");
const student_entity_1 = require("./student.entity");
let MatchResponse = class MatchResponse {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MatchResponse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, { onDelete: 'CASCADE' }),
    __metadata("design:type", student_entity_1.Student)
], MatchResponse.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => match_question_entity_1.MatchQuestion, { onDelete: 'CASCADE' }),
    __metadata("design:type", match_question_entity_1.MatchQuestion)
], MatchResponse.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => match_answer_entity_1.MatchAnswer, { onDelete: 'CASCADE' }),
    __metadata("design:type", match_answer_entity_1.MatchAnswer)
], MatchResponse.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], MatchResponse.prototype, "isCorrect", void 0);
MatchResponse = __decorate([
    (0, typeorm_1.Entity)()
], MatchResponse);
exports.MatchResponse = MatchResponse;
//# sourceMappingURL=match-response.entity.js.map