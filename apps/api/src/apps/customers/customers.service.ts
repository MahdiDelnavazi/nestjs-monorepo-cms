import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/createCustomer.dto';
import { CustomerService } from '@nestjs-cms/customer';

@Injectable()
export class CustomersService {
  constructor(private readonly customerService: CustomerService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.customerService.create(createCustomerDto);
    return { id: customer.id, name: customer.name, email: customer.email };
  }
}
