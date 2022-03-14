import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { StaffService } from "src/models/services/staff.service";
import { StudentService } from "src/models/services/student.service";
import { UserContext } from "./user-context";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {



    constructor(
        private staffService: StaffService,
        private studentService: StudentService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: 'ys-secret'
        })
    }

    async validate(payload: UserContext) {
        const ctx = {
            userId: payload.userId, isStaff: payload.isStaff
        }
        if (payload.isStaff) {
            ctx['staff'] = await this.staffService.findStaffByUserId(payload.userId);
        } else {
            ctx['student'] = await this.studentService.findStudentByUserId(payload.userId);
        }
        console.log(ctx);
        return ctx;
    }

}