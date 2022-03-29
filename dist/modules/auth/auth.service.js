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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const staff_service_1 = require("../../models/services/staff.service");
const student_service_1 = require("../../models/services/student.service");
const user_service_1 = require("../../models/services/user.service");
const user_context_1 = require("./user-context");
let AuthService = class AuthService {
    constructor(userService, jwtService, staffService, studentService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.staffService = staffService;
        this.studentService = studentService;
    }
    async login(username, password) {
        const user = await this.userService.findUserByName(username);
        if (user && user.password === password) {
            console.log('correct');
            const context = new user_context_1.UserContext();
            const payload = { userId: user.id, isStaff: user.isStaff };
            context.userId = user.id;
            context.isStaff = user.isStaff;
            context.username = user.username;
            context.accessToken = this.jwtService.sign(payload);
            return context;
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    async populateUserType(isStaff, userId) {
        return isStaff ? await this.staffService.findStaffByUserId(userId)
            : await this.studentService.findStudentByUserId(userId);
    }
};
AuthService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        staff_service_1.StaffService,
        student_service_1.StudentService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map