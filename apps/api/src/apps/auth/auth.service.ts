import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '../../../../../libraries/customer/src/lib/domain/service/customer.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly customerService: CustomerService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const customer = await this.customerService.findByEmail(email);
    if (customer && customer.password === password) {
      const payload = { email: customer.email, sub: customer.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new Error('Invalid credentials');
  }
}
