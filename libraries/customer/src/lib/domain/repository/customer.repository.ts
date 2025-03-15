import { Customer } from '../entity/customer.entity';

export interface CustomerRepository {
  create(customer: Customer): Promise<Customer>;
  findById(id: string): Promise<Customer | null>;
  findByEmail(email: string): Promise<Customer | null>;
  findAll(): Promise<Customer[]>;
  update(id: string, customer: Partial<Customer>): Promise<Customer | null>;
  delete(id: string): Promise<void>;
}
