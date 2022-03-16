import { Request } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { LoginUserDto } from 'src/models/dto/login-user.dto';
import { AuthService } from './auth.service';
import { JwtGaurd } from './jwt.guard';

@Controller()
export class AuthController {
    constructor(private authService: AuthService,) { }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        const { username, password } = loginUserDto;
        const ctx = this.authService.login(username, password);
        return ctx;
    }

    @UseGuards(JwtGaurd)
    @Post('user')
    checkUser(@Request() req: any) {
        return req.user;
    }
}

