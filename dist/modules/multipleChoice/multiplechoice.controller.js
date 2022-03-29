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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleChoiceController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const common_6 = require("@nestjs/common");
const mulitplechoice_service_1 = require("../../models/services/mulitplechoice.service");
const jwt_guard_1 = require("../auth/jwt.guard");
let MultipleChoiceController = class MultipleChoiceController {
    constructor(multipleChoiceService) {
        this.multipleChoiceService = multipleChoiceService;
    }
    getMultipleChoice(req, courseId) {
        return this.multipleChoiceService.getMultipleChoice(courseId);
    }
    createMultipleChoice(multipleChoiceDTO, courseId) {
        return this.multipleChoiceService.createMultipleChoice(courseId, multipleChoiceDTO);
    }
    getMultipleChoiceResponse(req, courseId) {
        const student = req.user.userCtx;
        return this.multipleChoiceService.getMultipleChoiceResponse(courseId, student.id);
    }
    createMultipleChoiceResponse(req, multipleChoiceResponseDTO) {
        const student = req.user.userCtx;
        return this.multipleChoiceService.createMulitpleChoiceResponse(multipleChoiceResponseDTO, student.id);
    }
};
__decorate([
    (0, common_4.UseGuards)(jwt_guard_1.JwtGaurd),
    (0, common_5.Get)(),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_1.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], MultipleChoiceController.prototype, "getMultipleChoice", null);
__decorate([
    (0, common_3.Put)(),
    __param(0, (0, common_2.Body)()),
    __param(1, (0, common_1.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number]),
    __metadata("design:returntype", void 0)
], MultipleChoiceController.prototype, "createMultipleChoice", null);
__decorate([
    (0, common_4.UseGuards)(jwt_guard_1.JwtGaurd),
    (0, common_5.Get)('/response'),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_1.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], MultipleChoiceController.prototype, "getMultipleChoiceResponse", null);
__decorate([
    (0, common_4.UseGuards)(jwt_guard_1.JwtGaurd),
    (0, common_3.Put)('/response'),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", void 0)
], MultipleChoiceController.prototype, "createMultipleChoiceResponse", null);
MultipleChoiceController = __decorate([
    (0, common_6.Controller)('/course/:courseId/mcq'),
    __metadata("design:paramtypes", [mulitplechoice_service_1.MulitpleChoiceService])
], MultipleChoiceController);
exports.MultipleChoiceController = MultipleChoiceController;
//# sourceMappingURL=multiplechoice.controller.js.map