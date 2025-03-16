import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '@nestjs-cms/customer';
import { SignUpDto } from './dto/signUp.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly customerService: CustomerService,
    private readonly jwtService: JwtService
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

  async signUp(signUpDto: SignUpDto) {
    // Create a new customer
    const customer = await this.customerService.create(signUpDto);

    // Generate a JWT token
    const payload = { email: customer.email, sub: customer.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
