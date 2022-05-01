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
exports.AddCourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const addcourse_entity_1 = require("../entities/addcourse.entity");
let AddCourseService = class AddCourseService {
    constructor(addCourseRespository) {
        this.addCourseRespository = addCourseRespository;
    }
    async updateTotal(id, total) {
        return await (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .update(addcourse_entity_1.AddCourse)
            .set({ total: total })
            .where("id = :id", { id: id })
            .execute();
    }
    async findOneCourse(courseId) {
        return await this.addCourseRespository.findOne(courseId);
    }
    async deleteOneCourse(courseId) {
        return await this.addCourseRespository.delete(courseId);
    }
    async getCourse(courseId) {
        return await this.addCourseRespository.findOne(courseId);
    }
    async getAllCourses() {
        return await this.addCourseRespository.find();
    }
    async createCourse(title, description, course, stafflink) {
        return await this.addCourseRespository.save({ title: title, description: description, course: course, stafflink: stafflink });
    }
    async getTotal(id) {
        return await this.addCourseRespository.findOne(id);
    }
};
AddCourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(addcourse_entity_1.AddCourse)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], AddCourseService);
exports.AddCourseService = AddCourseService;
//# sourceMappingURL=addcourse.service.js.map