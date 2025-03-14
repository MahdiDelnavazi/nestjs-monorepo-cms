import { Injectable } from '@nestjs/common';
import { OrderRepository, Order } from '@nestjs-cms/order';
import { PaymentService } from '@nestjs-cms/shared';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly paymentService: PaymentService
  ) {}

  async create(order: Order): Promise<Order> {
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

    // Save the order
    return this.orderRepository.create(order);
  }

  async findById(id: string): Promise<Order | null> {
    return this.orderRepository.findById(id);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }

  async update(id: string, order: Partial<Order>): Promise<Order> {
    return this.orderRepository.update(id, order);
  }

  async delete(id: string): Promise<void> {
    return this.orderRepository.delete(id);
  }
}
