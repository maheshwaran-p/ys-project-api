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
exports.MatchEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const course_entity_1 = require("./course.entity");
const match_question_entity_1 = require("./match-question.entity");
let MatchEntity = class MatchEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, course => course.id),
    __metadata("design:type", course_entity_1.Course)
], MatchEntity.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_question_entity_1.MatchQuestion, matchQuestion => matchQuestion.id, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], MatchEntity.prototype, "questions", void 0);
MatchEntity = __decorate([
    (0, typeorm_1.Entity)()
], MatchEntity);
exports.MatchEntity = MatchEntity;
//# sourceMappingURL=match.entity.js.map