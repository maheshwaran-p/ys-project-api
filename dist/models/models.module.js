"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const utils_service_1 = require("../utils/utils.service");
const addcourse_entity_1 = require("./entities/addcourse.entity");
const addnotes_entity_1 = require("./entities/addnotes.entity");
const course_reponse_entity_1 = require("./entities/course-reponse.entity");
const course_entity_1 = require("./entities/course.entity");
const marks_entity_1 = require("./entities/marks.entity");
const staff_entity_1 = require("./entities/staff.entity");
const student_entity_1 = require("./entities/student.entity");
const total_entity_1 = require("./entities/total.entity");
const user_entity_1 = require("./entities/user.entity");
const addcourse_service_1 = require("./services/addcourse.service");
const addnotes_service_1 = require("./services/addnotes.service");
const course_service_1 = require("./services/course.service");
const marks_service_1 = require("./services/marks.service");
const staff_service_1 = require("./services/staff.service");
const student_service_1 = require("./services/student.service");
const total_service_1 = require("./services/total.service");
const user_service_1 = require("./services/user.service");
let ModelsModule = class ModelsModule {
};
ModelsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'newys',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                staff_entity_1.Staff,
                student_entity_1.Student,
                course_entity_1.Course,
                course_reponse_entity_1.CourseResponse,
                addcourse_entity_1.AddCourse,
                addnotes_entity_1.AddNotes,
                marks_entity_1.Marks,
                total_entity_1.Total
            ]),
        ],
        providers: [
            staff_service_1.StaffService,
            user_service_1.UserService,
            student_service_1.StudentService,
            utils_service_1.UtilsService,
            course_service_1.CourseService,
            addcourse_service_1.AddCourseService,
            addnotes_service_1.AddnotesService,
            marks_service_1.MarksService,
            total_service_1.TotalService
        ],
        exports: [
            staff_service_1.StaffService,
            user_service_1.UserService,
            student_service_1.StudentService,
            course_service_1.CourseService,
            addcourse_service_1.AddCourseService,
            addnotes_service_1.AddnotesService,
            marks_service_1.MarksService,
            total_service_1.TotalService
        ],
    })
], ModelsModule);
exports.ModelsModule = ModelsModule;
//# sourceMappingURL=models.module.js.map