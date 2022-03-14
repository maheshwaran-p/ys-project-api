import { Request } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGaurd } from './jwt.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
    constructor(private authService: AuthService,) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req: any): any {
        return this.authService.getAccessToken(req.user);
    }

    @UseGuards(JwtGaurd)
    @Post('user')
    checkUser(@Request() req: any) {
        return req.user;
    }
}

