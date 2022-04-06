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
exports.TotalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const total_entity_1 = require("../entities/total.entity");
let TotalService = class TotalService {
    constructor(totalRespository) {
        this.totalRespository = totalRespository;
    }
    async updateTotal(totalDto) {
        console.log(totalDto.total);
        let r = await this.totalRespository.find({ where: { addcourse: totalDto.addcourseId } });
        if (r.length == 0) {
            const q = await this.totalRespository
                .createQueryBuilder()
                .insert()
                .into(total_entity_1.Total)
                .values({
                addcourse: { id: totalDto.addcourseId },
                total: totalDto.total
            })
                .execute();
            return q;
        }
        else {
            const q = await this.totalRespository
                .createQueryBuilder()
                .update(total_entity_1.Total)
                .set({
                addcourse: { id: totalDto.addcourseId },
                total: totalDto.total
            })
                .execute();
            return q;
        }
    }
};
TotalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(total_entity_1.Total)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], TotalService);
exports.TotalService = TotalService;
//# sourceMappingURL=total.service.js.map