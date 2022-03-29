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
exports.Marks = void 0;
const typeorm_1 = require("typeorm");
const addcourse_entity_1 = require("./addcourse.entity");
const base_entity_1 = require("./base.entity");
const student_entity_1 = require("./student.entity");
let Marks = class Marks extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Marks.prototype, "mark", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.id),
    __metadata("design:type", student_entity_1.Student)
], Marks.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => addcourse_entity_1.AddCourse, addcourse => addcourse.id),
    __metadata("design:type", addcourse_entity_1.AddCourse)
], Marks.prototype, "addcourse", void 0);
Marks = __decorate([
    (0, typeorm_1.Entity)()
], Marks);
exports.Marks = Marks;
//# sourceMappingURL=marks.entity.js.map