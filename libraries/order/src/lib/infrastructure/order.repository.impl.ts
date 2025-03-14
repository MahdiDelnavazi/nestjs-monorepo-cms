import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order, OrderRepository } from '@nestjs-cms/order';

@Injectable()
export class OrderRepositoryImpl implements OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>
  ) {}

  async create(order: Order): Promise<Order> {
    return this.repository.save(order);
  }

  async findById(id: string): Promise<Order | null> {
    return this.repository.findOneBy({ id });
  }

  async findByTransactionId(transactionId: string): Promise<Order | null> {
    return this.repository.findOneBy({ transactionId });
  }

  async findAll(): Promise<Order[]> {
    return this.repository.find();
  }

  async update(id: string, order: Partial<Order>): Promise<Order | null> {
    await this.repository.update(id, order);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
