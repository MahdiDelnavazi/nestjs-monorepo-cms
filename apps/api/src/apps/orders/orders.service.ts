import { Injectable, NotFoundException } from '@nestjs/common';
import { Order, OrderService } from '@nestjs-cms/order';
import { CustomerService } from '@nestjs-cms/customer';
import { CreateOrderDto } from './dto/createOrder.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';

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
    if (!customer) {
      throw new NotFoundException(
        `Customer with ID ${createOrderDto.customerId} not found`
      );
    }

    const order = new Order();
    order.productName = createOrderDto.productName;
    order.amount = createOrderDto.amount;
    order.customer = customer;
    return this.orderService.create(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  async findById(id: string): Promise<Order> {
    const order = await this.orderService.findById(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
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
