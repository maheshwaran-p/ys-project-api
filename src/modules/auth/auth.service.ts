import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/entities/user.entity';
import { UserService } from 'src/models/services/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<User> {

        const user = await this.userService.findUserByName(username);

        if (user && user.password === password) {
            return user;
        }

        return null;

    }

    async getAccessToken(user: User) {
        const payload = { id: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
