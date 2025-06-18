import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcryptjs';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @HttpCode(201)
    async create(@Body() userDto: UserDto) {
        const passwordHash = await bcrypt.hash(userDto.password, 10);
        return this.usersService.create({
            ...userDto,
            password: passwordHash,
        });
    }
}