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
exports.FillresponseController = void 0;
const common_1 = require("@nestjs/common");
const fillintheblanks_dto_1 = require("../../models/dto/fillintheblanks.dto");
const fillintheblanksresponse_service_1 = require("../../models/services/fillintheblanksresponse.service");
let FillresponseController = class FillresponseController {
    constructor(fillResponseService) {
        this.fillResponseService = fillResponseService;
    }
    fillresponse(fillResponseDTO) {
        return this.fillResponseService.fillresponse(fillResponseDTO.questionId, fillResponseDTO.studentId, fillResponseDTO.answer);
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fillintheblanks_dto_1.FillResponseDTO]),
    __metadata("design:returntype", void 0)
], FillresponseController.prototype, "fillresponse", null);
FillresponseController = __decorate([
    (0, common_1.Controller)('fillresponse'),
    __metadata("design:paramtypes", [fillintheblanksresponse_service_1.FillResponseService])
], FillresponseController);
exports.FillresponseController = FillresponseController;
//# sourceMappingURL=fillresponse.controller.js.map