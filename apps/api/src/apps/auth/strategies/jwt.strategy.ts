import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CustomerService } from '@nestjs-cms/customer';
import { Config } from '../../../../../../libraries/shared/src/lib/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly customerService: CustomerService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Config.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const customer = await this.customerService.findById(payload.sub);
    if (!customer) {
      throw new Error('Customer not found');
    }
    return customer;
  }
}
