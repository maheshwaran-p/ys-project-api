"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const total_module_1 = require("./modules/total/total.module");
const marks_module_1 = require("./modules/marks/marks.module");
const marks_controller_1 = require("./modules/marks/marks.controller");
const addnotes_module_1 = require("./modules/addnotes/addnotes.module");
const addcourse_module_1 = require("./modules/addcourse/addcourse.module");
const orderresponse_module_1 = require("./modules/order-response/orderresponse.module");
const order_module_1 = require("./modules/order/order.module");
const auth_module_1 = require("./modules/auth/auth.module");
const auth_controller_1 = require("./modules/auth/auth.controller");
const fillresponse_module_1 = require("./modules/fill-in-the-blanks-response/fillresponse.module");
const fill_module_1 = require("./modules/fill-in-the-blanks/fill.module");
const video_response_module_1 = require("./modules/video-response/video-response.module");
const video_module_1 = require("./modules/video/video.module");
const video_controller_1 = require("./modules/video/video.controller");
const student_module_1 = require("./modules/student/student.module");
const models_module_1 = require("./models/models.module");
const common_1 = require("@nestjs/common");
const staff_controller_1 = require("./modules/staff/staff.controller");
const fill_controller_1 = require("./modules/fill-in-the-blanks/fill.controller");
const video_response_controller_1 = require("./modules/video-response/video-response.controller");
const student_controller_1 = require("./modules/student/student.controller");
const fillresponse_controller_1 = require("./modules/fill-in-the-blanks-response/fillresponse.controller");
const auth_service_1 = require("./modules/auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
const multiplechoice_controller_1 = require("./modules/multipleChoice/multiplechoice.controller");
const addcourse_controller_1 = require("./modules/addcourse/addcourse.controller");
const addnotes_controller_1 = require("./modules/addnotes/addnotes.controller");
const total_controller_1 = require("./modules/total/total.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            total_module_1.TotalModule,
            marks_module_1.MarksModule,
            addnotes_module_1.AddnotesModule,
            addcourse_module_1.AddcourseModule,
            orderresponse_module_1.OrderresponseModule,
            order_module_1.OrderModule,
            auth_module_1.AuthModule,
            fillresponse_module_1.FillresponseModule,
            fill_module_1.FillModule,
            video_response_module_1.VideoResponseModule,
            video_module_1.VideoModule,
            student_module_1.StudentModule,
            models_module_1.ModelsModule,
            jwt_1.JwtModule.register({
                secret: "ys-secret",
                signOptions: { expiresIn: "7d" }
            })
        ],
        controllers: [
            total_controller_1.TotalController,
            marks_controller_1.MarksController,
            addnotes_controller_1.AddnotesController,
            addcourse_controller_1.AddcourseController,
            auth_controller_1.AuthController,
            student_controller_1.StudentController,
            staff_controller_1.StaffController,
            video_controller_1.VideoController,
            multiplechoice_controller_1.MultipleChoiceController,
            video_response_controller_1.VideoResponseController,
            fill_controller_1.FillController,
            fillresponse_controller_1.FillresponseController
        ],
        providers: [
            auth_service_1.AuthService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map