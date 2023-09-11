import { Get, Request } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FormDto } from 'src/models/dto/form.dto';
import { LoginUserDto, SignInUserDto } from 'src/models/dto/login-user.dto';
import { ReportDTO } from 'src/models/dto/report.dto';
import { UserDTO } from 'src/models/dto/user.dto';
import { AuthService } from './auth.service';
import { JwtGaurd } from './jwt.guard';

@Controller()
export class AuthController {
    constructor(private authService: AuthService,) { }

    @Get('/bot')
    async pinEnity(@Request() req): Promise<any> {
        console.log('called..')
        return "success"

    }
    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        const { username, password } = loginUserDto;
        const ctx = this.authService.login(username, password);
        return ctx;
    }


    @Post('sign-up')
    signUp(@Body() userDto: UserDTO) {
        const ctx = this.authService.register(userDto);
        return ctx;
    }

    @Post('sign-in')
    signIN(@Body() signInUserDto: SignInUserDto) {
        console.log('called')
        const ctx = this.authService.signIn(signInUserDto);
        return ctx;
    }

    @Post('report')
    saveReport(@Body() reportDTO: ReportDTO) {
        const ctx = this.authService.saveReport(reportDTO);
        return ctx;
    }

    @Post('/forms')
    async getAllForms(@Body() formDto: FormDto): Promise<any> {
        const ctx = await this.authService.getAllForm(formDto);
        console.log(ctx)
        return ctx;
    }




    @UseGuards(JwtGaurd)
    @Post('user')
    checkUser(@Request() req: any) {
        return req.user;
    }
}

