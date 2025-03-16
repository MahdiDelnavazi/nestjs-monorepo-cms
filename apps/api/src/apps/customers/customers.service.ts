import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';
import { Customer, CustomerService } from '@nestjs-cms/customer';

@Injectable()
export class CustomersService {
  constructor(private readonly customerService: CustomerService) {}

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = this.customerService.findByEmail(email);

    // check if customer with this email already exists
    const customerExistence = await this.findByEmail(email);
    if (customerExistence) {
      throw new ConflictException(
        `Customer with Email ${email} already exists`
      );
    }

    return customer;
  }

  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.customerService.findById(id);
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer;
  }

  async update(
    id: string,
    updateCustomerDto: UpdateCustomerDto
  ): Promise<Customer> {
    const customer = await this.findById(id);
    if (updateCustomerDto.name) customer.name = updateCustomerDto.name;
    if (updateCustomerDto.email) customer.email = updateCustomerDto.email;
    if (updateCustomerDto.password)
      customer.password = updateCustomerDto.password; // Hash the password!
    return this.customerService.update(id, customer);
  }

  async delete(id: string): Promise<void> {
    // check if customer with this email already exists
    await this.findById(id);

    await this.customerService.delete(id);
  }
}
