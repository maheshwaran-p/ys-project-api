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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResponse = exports.Order = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const course_entity_1 = require("./course.entity");
const student_entity_1 = require("./student.entity");
const video_entity_1 = require("./video.entity");
let Order = class Order extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => course_entity_1.Course, course => course.id),
    __metadata("design:type", course_entity_1.Course)
], Order.prototype, "course", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
let OrderResponse = class OrderResponse extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => video_entity_1.Video, video => video.id),
    __metadata("design:type", typeof (_a = typeof video_entity_1.Video !== "undefined" && video_entity_1.Video) === "function" ? _a : Object)
], OrderResponse.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, student => student.id),
    __metadata("design:type", student_entity_1.Student)
], OrderResponse.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderResponse.prototype, "answer", void 0);
OrderResponse = __decorate([
    (0, typeorm_1.Entity)()
], OrderResponse);
exports.OrderResponse = OrderResponse;
//# sourceMappingURL=order.entity.js.map