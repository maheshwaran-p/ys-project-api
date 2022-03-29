import { Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { UserContext } from "./user-context";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: UserContext): Promise<{
        userId: number;
        isStaff: boolean;
        userCtx: any;
    }>;
}
export {};
