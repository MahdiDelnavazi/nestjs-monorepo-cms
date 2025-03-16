import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '@nestjs-cms/app';
import { Customer } from '../entity/customer.entity';
import { CustomerRepositoryImpl } from '../../infrastructure/customer.repositoty.impl';

// TODO fix import
@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepositoryImpl) {}

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
