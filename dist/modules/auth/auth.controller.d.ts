import { LoginUserDto } from 'src/models/dto/login-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginUserDto): Promise<import("./user-context").UserContext>;
    checkUser(req: any): any;
}
