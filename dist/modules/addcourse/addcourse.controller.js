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
exports.AddcourseController = void 0;
const common_1 = require("@nestjs/common");
const addcourse_dto_1 = require("../../models/dto/addcourse.dto");
const addcourse_service_1 = require("../../models/services/addcourse.service");
let AddcourseController = class AddcourseController {
    constructor(addCourseService) {
        this.addCourseService = addCourseService;
    }
    async getcourses(addCourseDTO) {
        return await this.addCourseService.getAllCourses();
    }
    findOne(params) {
        console.log(params.id);
        return this.addCourseService.findOneCourse(params.id);
    }
    async addCourse(addCourseDTO) {
        return await this.addCourseService.createCourse(addCourseDTO.title, addCourseDTO.description, addCourseDTO.course, addCourseDTO.stafflink);
    }
    async deleteCourse(params) {
        console.log(params.id);
        return await this.addCourseService.deleteOneCourse(params.id);
    }
    async getCourse(params) {
        console.log(params.id);
        return await this.addCourseService.getCourse(params.id);
    }
    async getTotal(params) {
        return await this.addCourseService.getTotal(params.id);
    }
    async updateTotal(params, addCourseDTO) {
        return await this.addCourseService.updateTotal(params.id, addCourseDTO.total);
    }
};
__decorate([
    (0, common_1.Get)('/response'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addcourse_dto_1.AddCourseDTO]),
    __metadata("design:returntype", Promise)
], AddcourseController.prototype, "getcourses", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AddcourseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addcourse_dto_1.AddCourseDTO]),
    __metadata("design:returntype", Promise)
], AddcourseController.prototype, "addCourse", null);
__decorate([
    (0, common_1.Get)('delete/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddcourseController.prototype, "deleteCourse", null);
__decorate([
    (0, common_1.Get)('validate/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddcourseController.prototype, "getCourse", null);
__decorate([
    (0, common_1.Get)('total/get/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddcourseController.prototype, "getTotal", null);
__decorate([
    (0, common_1.Post)('/total/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, addcourse_dto_1.AddCourseDTO]),
    __metadata("design:returntype", Promise)
], AddcourseController.prototype, "updateTotal", null);
AddcourseController = __decorate([
    (0, common_1.Controller)('/addcourse'),
    __metadata("design:paramtypes", [addcourse_service_1.AddCourseService])
], AddcourseController);
exports.AddcourseController = AddcourseController;
//# sourceMappingURL=addcourse.controller.js.map