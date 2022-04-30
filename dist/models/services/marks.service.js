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
exports.MarksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const marks_entity_1 = require("../entities/marks.entity");
let MarksService = class MarksService {
    constructor(marksRespository, connection) {
        this.marksRespository = marksRespository;
        this.connection = connection;
    }
    async percentage(studentId) {
        const query = await this.marksRespository.createQueryBuilder('marks').
            leftJoin('marks.addcourse', 'addcourse').addSelect(['addcourse.title', 'addcourse.description', 'addcourse.total']);
        query.where('marks.studentId = :studentId', {
            studentId: studentId,
        });
        return query.execute();
    }
    async addMarks(markDTO) {
        let r = await this.marksRespository.find({ where: { addcourse: markDTO.addcourseId } });
        console.log(r.length);
        if (r.length != 0) {
            console.log('marks already posted');
            const q = await (0, typeorm_2.getConnection)()
                .createQueryBuilder()
                .delete()
                .from(marks_entity_1.Marks)
                .where("addcourse= :id", { id: markDTO.addcourseId }).execute();
        }
        console.log('marks inserting...');
        const q1 = await this.marksRespository.createQueryBuilder()
            .insert()
            .into(marks_entity_1.Marks)
            .values(markDTO.studentMark.map(e => ({
            mark: e.mark,
            addcourse: { id: markDTO.addcourseId },
            student: { id: e.studentId }
        }))).execute();
        return q1;
    }
    async leaderboard() {
        const MarkSum = await this.marksRespository
            .createQueryBuilder("user")
            .leftJoin('user.student', 'student').addSelect(['student.username', 'student.firstName', 'student.lastName'])
            .select("user.student")
            .addSelect("student.username")
            .addSelect("student.firstName")
            .addSelect("student.lastName")
            .addSelect("SUM(user.mark)", "sum")
            .groupBy("user.student")
            .getRawMany();
        MarkSum.sort(function (a, b) {
            return b.sum - a.sum;
        });
        return MarkSum;
    }
    async getCourseMarks(CourseId) {
        let marks = await this.marksRespository.find({ where: { addcourse: CourseId } });
        return marks;
    }
};
MarksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(marks_entity_1.Marks)),
    __metadata("design:paramtypes", [Repository_1.Repository,
        typeorm_2.Connection])
], MarksService);
exports.MarksService = MarksService;
//# sourceMappingURL=marks.service.js.map