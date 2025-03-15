import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './domain/entity/order.entity';
import { OrderService } from './domain/service/order.service';
import { OrderRepositoryImpl } from './infrastructure/order.repository.impl';
import { CreateOrderHandler } from './application/handlers/createOrder.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { CustomerModule } from '@nestjs-cms/customer';
import { SharedModule } from '@nestjs-cms/shared';

@Module({
  imports: [
    forwardRef(() => CustomerModule),
    TypeOrmModule.forFeature([Order]),
    CqrsModule,
    SharedModule,
  ],
  providers: [OrderRepositoryImpl, OrderService, CreateOrderHandler],
  exports: [OrderService, OrderRepositoryImpl],
})
export class OrderModule {}
