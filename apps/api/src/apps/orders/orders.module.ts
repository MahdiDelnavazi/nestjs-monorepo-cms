import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrderModule } from '@nestjs-cms/order';
import { CustomerModule } from '@nestjs-cms/customer';

@Module({
  imports: [CustomerModule, OrderModule],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
