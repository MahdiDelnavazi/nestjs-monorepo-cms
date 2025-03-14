import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Order,
  OrderService,
  OrderRepositoryImpl,
  CreateOrderHandler,
} from '@nestjs-cms/order';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), CqrsModule],
  providers: [
    {
      provide: 'OrderRepository',
      useClass: OrderRepositoryImpl,
    },
    OrderService,
    CreateOrderHandler,
  ],
  exports: [OrderService],
})
export class OrderModule {}
