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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const utils_service_1 = require("../../utils/utils.service");
const report_entity_1 = require("../entities/report.entity");
let UserService = class UserService {
    constructor(userRepository, reportRepository, utilsService) {
        this.userRepository = userRepository;
        this.reportRepository = reportRepository;
        this.utilsService = utilsService;
    }
    async createUser(username, password, email, isStaff = false) {
        let namecheck = await this.userRepository.findOne({ firstname: username });
        if (namecheck != undefined) {
            console.log("name already exist");
            return null;
        }
        else {
            const user = this.userRepository.create({
                firstname: username,
                email: email,
            });
            user.isStaff = isStaff;
            user.password = password;
            return this.userRepository.save(user);
        }
    }
    async getAllForms(formDto) {
        let forms;
        if (formDto.returnType == 'filtered') {
            forms = await this.reportRepository.find({ status: formDto.status, type: formDto.type });
        }
        else if (formDto.returnType == 'mine') {
            console.log(formDto);
            forms = await this.reportRepository.find({ userId: formDto.userId, });
        }
        else if (formDto.returnType == 'all') {
            forms = await this.reportRepository.find({});
        }
        else {
            forms = await this.reportRepository.find({ userId: formDto.userId, status: formDto.status });
        }
        return {
            msg: '1',
            data: forms
        };
    }
    async resetPassword(email, username, password) {
        let reset = await this.userRepository.findOne({ email: email });
        if (reset == undefined) {
            return null;
        }
        reset.firstname = username;
        reset.password = password;
        return await this.userRepository.save(reset);
    }
    async findUserByName(username) {
        return this.userRepository.findOne({ firstname: username });
    }
    async rigister(userDto) {
        let user = await this.userRepository.findOne({ mobileNumber: userDto.mobileNumber });
        console.log(user);
        if (user == undefined) {
            const user = await this.userRepository.save(userDto);
            let ids = [];
            if (userDto.userType = '0') {
                ids.push(user_entity_1.UserType.BENEFICIARY);
            }
            else if (userDto.userType = '1') {
                ids.push(user_entity_1.UserType.BENEFICIARY);
                ids.push(user_entity_1.UserType.PROJECT_STAFF);
            }
            if (userDto.userType = '2') {
                ids.push(user_entity_1.UserType.BENEFICIARY);
                ids.push(user_entity_1.UserType.PROJECT_STAFF);
                ids.push(user_entity_1.UserType.HQ_STAFF);
            }
            const reports = await this.reportRepository.find({ where: {} });
            console.log(reports);
            return {
                'msg': 1,
                data: reports,
                user_id: user.id,
                user_type: user.userType,
                user_name: user.firstname
            };
        }
        else {
            return { 'msg': 0 };
        }
    }
    async login(signInUserDto) {
        let user = await this.userRepository.findOne({ mobileNumber: signInUserDto.mobileNumber });
        if (user && user.password == signInUserDto.password) {
            let ids = [];
            if (user.userType == '0') {
                ids.push(user_entity_1.UserType.BENEFICIARY);
            }
            else if (user.userType == '1') {
                ids.push(user_entity_1.UserType.BENEFICIARY);
                ids.push(user_entity_1.UserType.PROJECT_STAFF);
            }
            else if (user.userType == '2') {
                ids.push(user_entity_1.UserType.BENEFICIARY);
                ids.push(user_entity_1.UserType.PROJECT_STAFF);
                ids.push(user_entity_1.UserType.HQ_STAFF);
            }
            const reports = await this.reportRepository.find({ where: {} });
            console.log(reports);
            return {
                'msg': 1,
                data: reports,
                user_id: user.id,
                user_type: user.userType,
                user_name: user.firstname
            };
        }
        else {
            return { 'msg': 0 };
        }
    }
    async report(reportDTO) {
        await this.reportRepository.save(reportDTO);
        const forms = await this.reportRepository.find({});
        console.log(1);
        return { msg: 1, data: forms };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(report_entity_1.Report)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        utils_service_1.UtilsService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map