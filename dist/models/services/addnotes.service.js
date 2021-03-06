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
exports.AddnotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const addnotes_entity_1 = require("../entities/addnotes.entity");
let AddnotesService = class AddnotesService {
    constructor(addNotesRespository) {
        this.addNotesRespository = addNotesRespository;
    }
    async deleteOneNote(noteId) {
        return await this.addNotesRespository.delete(noteId);
    }
    async getNotes() {
        return await this.addNotesRespository.find();
    }
    async createNotes(title, description, link) {
        return await this.addNotesRespository.save({ title: title, description: description, link: link });
    }
};
AddnotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(addnotes_entity_1.AddNotes)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], AddnotesService);
exports.AddnotesService = AddnotesService;
//# sourceMappingURL=addnotes.service.js.map