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
exports.AddnotesController = void 0;
const common_1 = require("@nestjs/common");
const addnotes_dto_1 = require("../../models/dto/addnotes.dto");
const addnotes_service_1 = require("../../models/services/addnotes.service");
let AddnotesController = class AddnotesController {
    constructor(addnotesService) {
        this.addnotesService = addnotesService;
    }
    async deleteNote(params) {
        console.log(params.id);
        return await this.addnotesService.deleteOneNote(params.id);
    }
    async getcourses(addNotesDTO) {
        return await this.addnotesService.getNotes();
    }
    async createNotes(addNotesDTO) {
        return await this.addnotesService.createNotes(addNotesDTO.title, addNotesDTO.description, addNotesDTO.link);
    }
};
__decorate([
    (0, common_1.Get)('delete/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddnotesController.prototype, "deleteNote", null);
__decorate([
    (0, common_1.Get)('/response'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addnotes_dto_1.AddNotesDTO]),
    __metadata("design:returntype", Promise)
], AddnotesController.prototype, "getcourses", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addnotes_dto_1.AddNotesDTO]),
    __metadata("design:returntype", Promise)
], AddnotesController.prototype, "createNotes", null);
AddnotesController = __decorate([
    (0, common_1.Controller)('/addnote'),
    __metadata("design:paramtypes", [addnotes_service_1.AddnotesService])
], AddnotesController);
exports.AddnotesController = AddnotesController;
//# sourceMappingURL=addnotes.controller.js.map