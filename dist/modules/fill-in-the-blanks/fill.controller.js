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
exports.FillController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const fillintheblanks_dto_1 = require("../../models/dto/fillintheblanks.dto");
const fillintheblanks_service_1 = require("../../models/services/fillintheblanks.service");
let FillController = class FillController {
    constructor(fillquestinService) {
        this.fillquestinService = fillquestinService;
    }
    getQuestions(courseId) {
    }
    fillquestion(fillQuestionDTO) {
        return this.fillquestinService.fillintheblanksquestion(fillQuestionDTO.question, fillQuestionDTO.answer);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FillController.prototype, "getQuestions", null);
__decorate([
    (0, common_3.Post)(),
    __param(0, (0, common_3.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fillintheblanks_dto_1.FillQuestionDTO]),
    __metadata("design:returntype", Promise)
], FillController.prototype, "fillquestion", null);
FillController = __decorate([
    (0, common_3.Controller)('/course/:courseId/fill'),
    __metadata("design:paramtypes", [fillintheblanks_service_1.FillintheblanksService])
], FillController);
exports.FillController = FillController;
//# sourceMappingURL=fill.controller.js.map