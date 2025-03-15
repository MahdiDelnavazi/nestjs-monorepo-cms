import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer, CustomerRepository } from '@nestjs-cms/customer';
import { CreateCustomerDto } from '@nestjs-cms/app';
import { UpdateCustomerDto } from './dto/updateCustomer.dto';

@Injectable()
export class CustomersService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer(createCustomerDto);
    return this.customerRepository.create(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.findAll();
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.customerRepository.findById(id);
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
    return this.customerRepository.update(id, customer);
  }

  async delete(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
