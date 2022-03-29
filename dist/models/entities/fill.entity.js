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
exports.FillResponse = exports.FillInTheBlanks = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const course_entity_1 = require("./course.entity");
const student_entity_1 = require("./student.entity");
let FillInTheBlanks = class FillInTheBlanks extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FillInTheBlanks.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FillInTheBlanks.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => course_entity_1.Course, course => course.id),
    __metadata("design:type", course_entity_1.Course)
], FillInTheBlanks.prototype, "course", void 0);
FillInTheBlanks = __decorate([
    (0, typeorm_1.Entity)()
], FillInTheBlanks);
exports.FillInTheBlanks = FillInTheBlanks;
let FillResponse = class FillResponse extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => FillInTheBlanks, fillintheblanks => fillintheblanks.id),
    __metadata("design:type", FillInTheBlanks)
], FillResponse.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.id),
    __metadata("design:type", student_entity_1.Student)
], FillResponse.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FillResponse.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], FillResponse.prototype, "isCorrect", void 0);
FillResponse = __decorate([
    (0, typeorm_1.Entity)()
], FillResponse);
exports.FillResponse = FillResponse;
//# sourceMappingURL=fill.entity.js.map