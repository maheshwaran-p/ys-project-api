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
exports.VideoResponseController = void 0;
const common_1 = require("@nestjs/common");
const video_1 = require("../../models/dto/video");
const video_response_service_1 = require("src/models/services/video-response.service");
let VideoResponseController = class VideoResponseController {
    constructor(videoResponseService) {
        this.videoResponseService = videoResponseService;
    }
    videoresponse(videoResponseDTO) {
        return this.videoResponseService.videoresponse(videoResponseDTO.questionId, videoResponseDTO.studentId, videoResponseDTO.answer);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [video_1.VideoResponseDTO]),
    __metadata("design:returntype", Promise)
], VideoResponseController.prototype, "videoresponse", null);
VideoResponseController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof video_response_service_1.VideoResponseService !== "undefined" && video_response_service_1.VideoResponseService) === "function" ? _a : Object])
], VideoResponseController);
exports.VideoResponseController = VideoResponseController;
//# sourceMappingURL=video-response.controller.js.map