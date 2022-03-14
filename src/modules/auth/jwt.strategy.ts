import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { StaffService } from "src/models/services/staff.service";
import { StudentService } from "src/models/services/student.service";
import { AuthService } from "./auth.service";
import { UserContext } from "./user-context";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: 'ys-secret'
        })
    }

    async validate(payload: UserContext) {
        const ctx = {
            userId: payload.userId,
            isStaff: payload.isStaff,
            userCtx: await this.authService.populateUserType(payload.isStaff, payload.userId)
        }
        return ctx;
    }

}