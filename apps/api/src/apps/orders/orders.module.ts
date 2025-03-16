import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderModule } from '@nestjs-cms/order';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [CustomersModule, OrderModule],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
