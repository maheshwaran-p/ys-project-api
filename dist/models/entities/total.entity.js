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
exports.Total = void 0;
const typeorm_1 = require("typeorm");
const addcourse_entity_1 = require("./addcourse.entity");
const base_entity_1 = require("./base.entity");
let Total = class Total extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => addcourse_entity_1.AddCourse, addcourse => addcourse.id),
    __metadata("design:type", addcourse_entity_1.AddCourse)
], Total.prototype, "addcourse", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Total.prototype, "total", void 0);
Total = __decorate([
    (0, typeorm_1.Entity)()
], Total);
exports.Total = Total;
//# sourceMappingURL=total.entity.js.map