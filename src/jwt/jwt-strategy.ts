import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'b7e2f6c1-4a3d-4e2b-9c8e-1f7a2d5e6b9c-park-app-2025',
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}