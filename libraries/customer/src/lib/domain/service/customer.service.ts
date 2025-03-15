import { Inject, Injectable } from '@nestjs/common';
import { Customer, CustomerRepository } from '@nestjs-cms/customer';
import { CreateCustomerDto } from '@nestjs-cms/app';

// TODO fix import
@Injectable()
export class CustomerService {
  constructor(
    @Inject('CustomerRepository')
    private readonly customerRepository: CustomerRepository
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer(createCustomerDto);
    customer.password = createCustomerDto.password; // In a real app, we should hash the password!
    return this.customerRepository.create(customer);
  }

  async findById(id: string): Promise<Customer | null> {
    return this.customerRepository.findById(id);
  }

  async findByEmail(email: string): Promise<Customer | null> {
    return this.customerRepository.findByEmail(email);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.findAll();
  }

  async update(
    id: string,
    customer: Partial<Customer>
  ): Promise<Customer | null> {
    return this.customerRepository.update(id, customer);
  }

  async delete(id: string): Promise<void> {
    return this.customerRepository.delete(id);
  }
}
