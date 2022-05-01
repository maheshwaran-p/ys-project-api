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
exports.MarksController = void 0;
const common_1 = require("@nestjs/common");
const marks_dto_1 = require("../../models/dto/marks.dto");
const marks_service_1 = require("../../models/services/marks.service");
let MarksController = class MarksController {
    constructor(marksService) {
        this.marksService = marksService;
    }
    async percentage(params) {
        return await this.marksService.percentage(params.id);
    }
    async addMarks(markDTO) {
        return await this.marksService.addMarks(markDTO);
    }
    async getCourseMarks(params) {
        return await this.marksService.getCourseMarks(params.id);
    }
    async leaderboard() {
        return await this.marksService.leaderboard();
    }
};
__decorate([
    (0, common_1.Get)('/percentage/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "percentage", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [marks_dto_1.MarkDTO]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "addMarks", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "getCourseMarks", null);
__decorate([
    (0, common_1.Get)('/leader'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarksController.prototype, "leaderboard", null);
MarksController = __decorate([
    (0, common_1.Controller)('/marks'),
    __metadata("design:paramtypes", [marks_service_1.MarksService])
], MarksController);
exports.MarksController = MarksController;
//# sourceMappingURL=marks.controller.js.map