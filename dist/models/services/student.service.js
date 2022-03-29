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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("../entities/student.entity");
const user_service_1 = require("./user.service");
let StudentService = class StudentService {
    constructor(studentRespository, userService) {
        this.studentRespository = studentRespository;
        this.userService = userService;
    }
    async getStudents() {
        return await this.studentRespository.find();
    }
    async createStudent(createStudentDTO) {
        let { username, password, email } = createStudentDTO;
        const user = await this.userService.createUser(username, password, email);
        let { firstName, lastName } = createStudentDTO;
        return this.studentRespository.save({ firstName: firstName, lastName: lastName, username: username, user: user });
    }
    async findStudentByUserId(userId) {
        return this.studentRespository.findOne({ user: { id: userId } });
    }
    async findStudentByUserName(username) {
        console.log(await this.studentRespository.findOne({ username }));
        return await this.studentRespository.findOne({ username });
    }
    async resetpassword(resetDTO) {
        return await this.userService.resetPassword(resetDTO.email, resetDTO.username, resetDTO.password);
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map