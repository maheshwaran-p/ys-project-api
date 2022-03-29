"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleChoiceModule = void 0;
const common_1 = require("@nestjs/common");
const models_module_1 = require("../../models/models.module");
const multiplechoice_controller_1 = require("./multiplechoice.controller");
let MultipleChoiceModule = class MultipleChoiceModule {
};
MultipleChoiceModule = __decorate([
    (0, common_1.Module)({
        imports: [models_module_1.ModelsModule],
        controllers: [multiplechoice_controller_1.MultipleChoiceController],
        providers: [],
    })
], MultipleChoiceModule);
exports.MultipleChoiceModule = MultipleChoiceModule;
//# sourceMappingURL=multiplechoice.module.js.map