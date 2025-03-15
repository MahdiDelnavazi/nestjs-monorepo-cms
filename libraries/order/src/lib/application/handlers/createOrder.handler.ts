import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Order } from '../../domain/entity/order.entity';
import { OrderService } from '../../domain/service/order.service';
import { CreateOrderCommand } from '../commands/createOrder.command';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(private readonly orderService: OrderService) {}

  async execute(command: CreateOrderCommand) {
    const { productName, amount, customerId } = command;
    const order = new Order();
    order.productName = productName;
    order.amount = amount;
    order.customer = { id: customerId } as any;
    return this.orderService.create(order);
  }
}
