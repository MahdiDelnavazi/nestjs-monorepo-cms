import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../entity/order.entity';
import { OrderRepository } from '../repository/order.repository';
import { MockPaymentService } from '@nestjs-cms/shared';
import { OrderRepositoryImpl } from '../../infrastructure/order.repository.impl';

@Injectable()
export class OrderService {
  constructor(
    @Inject(OrderRepositoryImpl)
    private readonly orderRepository: OrderRepository,
    private readonly paymentService: MockPaymentService
  ) {}

  async create(order: Order): Promise<Order> {
    return this.orderRepository.create(order);
  }

  async orderPayment(orderId: string): Promise<Order | null> {
    const order = await this.findById(orderId);
    if (!order) {
    }

    // Process payment
    const paymentResult = await this.paymentService.processPayment(
      order.amount,
      'USD'
    );

    // Update order status and transaction ID
    if (paymentResult.success) {
      order.status = 'paid';
      order.transactionId = paymentResult.transactionId; // Now this works!
    } else {
      order.status = 'failed';
    }
    return this.update(orderId, order);
  }

  async findById(id: string): Promise<Order> {
    const order = this.orderRepository.findById(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }

  async update(id: string, order: Partial<Order>): Promise<Order | null> {
    return this.orderRepository.update(id, order);
  }

  async delete(id: string): Promise<void> {
    return this.orderRepository.delete(id);
  }
}
