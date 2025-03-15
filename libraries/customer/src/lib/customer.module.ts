import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './domain/entity/customer.entity';
import { CustomerService } from './domain/service/customer.service';
import { OrderModule } from '@nestjs-cms/order';
import { CustomerRepositoryImpl } from './infrastructure/customer.repositoty.impl';

@Module({
imports: [
    TypeOrmModule.forFeature([Customer]),
    forwardRef(() => OrderModule),
],
providers: [CustomerRepositoryImpl, CustomerService],
exports: [CustomerRepositoryImpl, CustomerService],
})
export class CustomerModule {}
