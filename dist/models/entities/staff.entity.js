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
exports.Staff = void 0;
const typeorm_1 = require("typeorm");
const course_entity_1 = require("./course.entity");
const user_entity_1 = require("./user.entity");
let Staff = class Staff {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Staff.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Staff.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_entity_1.Course, course => course.staff),
    __metadata("design:type", Array)
], Staff.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => course_entity_1.Course, course => course.allowedStaffs),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Staff.prototype, "allowedCourses", void 0);
Staff = __decorate([
    (0, typeorm_1.Entity)()
], Staff);
exports.Staff = Staff;
//# sourceMappingURL=staff.entity.js.map