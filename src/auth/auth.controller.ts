import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() body: UserDto) {
        const user = await this.authService.validateUser(body.name, body.password);
        if (!user) throw new UnauthorizedException('Credenciais inválidas');
        return this.authService.login(user);
    }
}