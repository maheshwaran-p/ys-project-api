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
exports.MultipleChoiceResponse = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const multiple_choice_entity_1 = require("./multiple-choice.entity");
const student_entity_1 = require("./student.entity");
let MultipleChoiceResponse = class MultipleChoiceResponse extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.id, { onDelete: 'CASCADE' }),
    __metadata("design:type", student_entity_1.Student)
], MultipleChoiceResponse.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => multiple_choice_entity_1.MultipleChoice, multipleChoice => multipleChoice.id, { onDelete: 'CASCADE' }),
    __metadata("design:type", multiple_choice_entity_1.MultipleChoice)
], MultipleChoiceResponse.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], MultipleChoiceResponse.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Boolean)
], MultipleChoiceResponse.prototype, "isCorrect", void 0);
MultipleChoiceResponse = __decorate([
    (0, typeorm_1.Entity)()
], MultipleChoiceResponse);
exports.MultipleChoiceResponse = MultipleChoiceResponse;
//# sourceMappingURL=multiple-choice-response.entity.js.map