import { ICommand } from '@nestjs/cqrs';

export class CreateOrderCommand implements ICommand {
  constructor(
    public readonly productName: string,
    public readonly amount: number,
    public readonly customerId: string
  ) {}
}
