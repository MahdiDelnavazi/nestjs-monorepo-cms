import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Customer,
  CustomerService,
  CustomerRepositoryImpl,
} from '@nestjs-cms/customer';
import { OrderModule } from '@nestjs-cms/order';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    forwardRef(() => OrderModule),
  ],
  providers: [
    {
      provide: 'CustomerRepository',
      useClass: CustomerRepositoryImpl,
    },
    CustomerService,
  ],
  exports: [CustomerService],
})
export class CustomerModule {}
