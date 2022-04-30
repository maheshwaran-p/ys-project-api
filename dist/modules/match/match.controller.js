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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const match_service_1 = require("src/models/services/match.service");
let MatchController = class MatchController {
    constructor(matchService) {
        this.matchService = matchService;
    }
    createMatch(matchDTOs, courseId) {
        return this.matchService.createMatch(matchDTOs, courseId);
    }
    createMatchResponse(matchResponseDTOs, studentId) {
        return this.matchService.createMatchReponse(matchResponseDTOs, studentId);
    }
};
__decorate([
    (0, common_3.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.Param)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "createMatch", null);
__decorate([
    (0, common_3.Put)('/:studentId/response'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.Param)('studentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "createMatchResponse", null);
MatchController = __decorate([
    (0, common_4.Controller)('/course/:courseId/match'),
    __metadata("design:paramtypes", [typeof (_a = typeof match_service_1.MatchService !== "undefined" && match_service_1.MatchService) === "function" ? _a : Object])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map