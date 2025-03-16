import { Order } from '@nestjs-cms/order';

export interface OrderRepository {
  create(order: Order): Promise<Order>;
  findById(id: string): Promise<Order | null>;
  findByTransactionId(transactionId: string): Promise<Order | null>;
  findAll(): Promise<Order[]>;
  update(id: string, order: Partial<Order>): Promise<Order | null>;
  delete(id: string): Promise<void>;
}
