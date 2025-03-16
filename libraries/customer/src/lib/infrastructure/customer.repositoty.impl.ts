import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../domain/entity/customer.entity';
import { CustomerRepository } from '../domain/repository/customer.repository';

@Injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>
  ) {}

  async create(customer: Customer): Promise<Customer> {
    return this.repository.save(customer);
  }

  async findById(id: string): Promise<Customer | null> {
    return this.repository.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<Customer | null> {
    return this.repository.findOneBy({ email });
  }

  async findAll(): Promise<Customer[]> {
    return this.repository.find();
  }

  async update(
    id: string,
    customer: Partial<Customer>
  ): Promise<Customer | null> {
    await this.repository.update(id, customer);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
