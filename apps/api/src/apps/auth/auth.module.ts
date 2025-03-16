import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { CustomerModule } from '@nestjs-cms/customer';
import { Config } from '../../../../../libraries/shared/src/lib/config';

@Module({
  imports: [
    CustomerModule,
    PassportModule,
    JwtModule.register({
      secret: Config.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
