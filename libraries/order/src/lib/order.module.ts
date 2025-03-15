import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  OrderService,
  OrderRepositoryImpl,
  CreateOrderHandler,
  Order,
} from '@nestjs-cms/order';
import { CqrsModule } from '@nestjs/cqrs';
import { CustomerModule } from '@nestjs-cms/customer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    forwardRef(() => CustomerModule),
    CqrsModule,
  ],
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
