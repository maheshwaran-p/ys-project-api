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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const form_dto_1 = require("../../models/dto/form.dto");
const login_user_dto_1 = require("../../models/dto/login-user.dto");
const report_dto_1 = require("../../models/dto/report.dto");
const user_dto_1 = require("../../models/dto/user.dto");
const auth_service_1 = require("./auth.service");
const jwt_guard_1 = require("./jwt.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async pinEnity(req) {
        console.log('called..');
        return "success";
    }
    login(loginUserDto) {
        const { username, password } = loginUserDto;
        const ctx = this.authService.login(username, password);
        return ctx;
    }
    signUp(userDto) {
        const ctx = this.authService.register(userDto);
        return ctx;
    }
    signIN(signInUserDto) {
        console.log('called');
        const ctx = this.authService.signIn(signInUserDto);
        return ctx;
    }
    saveReport(reportDTO) {
        const ctx = this.authService.saveReport(reportDTO);
        return ctx;
    }
    async getAllForms(formDto) {
        const ctx = await this.authService.getAllForm(formDto);
        console.log(ctx);
        return ctx;
    }
    checkUser(req) {
        return req.user;
    }
};
__decorate([
    (0, common_1.Get)('/bot'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "pinEnity", null);
__decorate([
    (0, common_3.Post)('login'),
    __param(0, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_3.Post)('sign-up'),
    __param(0, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_3.Post)('sign-in'),
    __param(0, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.SignInUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIN", null);
__decorate([
    (0, common_3.Post)('report'),
    __param(0, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [report_dto_1.ReportDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "saveReport", null);
__decorate([
    (0, common_3.Post)('/forms'),
    __param(0, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [form_dto_1.FormDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAllForms", null);
__decorate([
    (0, common_2.UseGuards)(jwt_guard_1.JwtGaurd),
    (0, common_3.Post)('user'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "checkUser", null);
AuthController = __decorate([
    (0, common_5.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map