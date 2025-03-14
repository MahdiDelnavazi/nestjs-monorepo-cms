import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Customer,
  CustomerService,
  CustomerRepositoryImpl,
} from '@nestjs-cms/customer';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
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
