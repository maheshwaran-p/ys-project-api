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
exports.MatchQuestion = void 0;
const typeorm_1 = require("typeorm");
const match_answer_entity_1 = require("./match-answer.entity");
const match_entity_1 = require("./match.entity");
let MatchQuestion = class MatchQuestion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MatchQuestion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], MatchQuestion.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => match_answer_entity_1.MatchAnswer, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", match_answer_entity_1.MatchAnswer)
], MatchQuestion.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => match_entity_1.MatchEntity, match => match.id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", match_entity_1.MatchEntity)
], MatchQuestion.prototype, "match", void 0);
MatchQuestion = __decorate([
    (0, typeorm_1.Entity)()
], MatchQuestion);
exports.MatchQuestion = MatchQuestion;
//# sourceMappingURL=match-question.entity.js.map