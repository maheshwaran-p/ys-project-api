import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/models/models.module';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [ModelsModule,
        PassportModule, JwtModule.register({
            secret: "ys-secret",
            signOptions: { expiresIn: "7d" }
        })],
    controllers: [AuthController],
    providers: [AuthService,
        LocalStrategy, JwtStrategy],
})
export class AuthModule { }
