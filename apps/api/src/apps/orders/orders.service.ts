import { Injectable, NotFoundException } from '@nestjs/common';
import { Order, OrderService } from '@nestjs-cms/order';
import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { CustomerService } from '@nestjs-cms/customer';

@Injectable()
export class OrdersService {
  constructor(
    private readonly orderService: OrderService,
    private readonly customerService: CustomerService
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const customer = await this.customerService.findById(
      createOrderDto.customerId
    );

    const order = new Order();
    order.productName = createOrderDto.productName;
    order.amount = createOrderDto.amount;
    order.customer = customer;
    order.status = 'not-paid';
    return this.orderService.create(order);
  }

  async payment(orderId: string): Promise<Order | null> {
    return this.orderService.payment(orderId);
  }

  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  async findById(id: string): Promise<Order> {
    return await this.orderService.findById(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.findById(id);
    if (updateOrderDto.productName)
      order.productName = updateOrderDto.productName;
    if (updateOrderDto.amount) order.amount = updateOrderDto.amount;
    if (updateOrderDto.status) order.status = updateOrderDto.status;
    return this.orderService.update(id, order);
  }

  async delete(id: string): Promise<void> {
    await this.orderService.delete(id);
  }
}
