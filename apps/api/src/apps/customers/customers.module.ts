import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { CustomerModule } from '@nestjs-cms/customer';

@Module({
  imports: [CustomerModule],
  providers: [CustomersService],
  exports: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}
