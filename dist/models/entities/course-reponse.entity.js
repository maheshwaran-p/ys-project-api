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
exports.CourseResponse = void 0;
const typeorm_1 = require("typeorm");
const course_entity_1 = require("./course.entity");
const student_entity_1 = require("./student.entity");
let CourseResponse = class CourseResponse {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, course => course.id, { primary: true }),
    __metadata("design:type", course_entity_1.Course)
], CourseResponse.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.id, { primary: true }),
    __metadata("design:type", student_entity_1.Student)
], CourseResponse.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], CourseResponse.prototype, "createdAt", void 0);
CourseResponse = __decorate([
    (0, typeorm_1.Entity)()
], CourseResponse);
exports.CourseResponse = CourseResponse;
//# sourceMappingURL=course-reponse.entity.js.map