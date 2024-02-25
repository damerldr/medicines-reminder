// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserProfileModule } from 'src/user-profile/user-profile/user-profile.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { randomBytes } from 'crypto'; 

@Module({
  imports: [
    UserProfileModule,
    PassportModule,
    JwtModule.register({
      secret: randomBytes(32).toString('hex'), 
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
