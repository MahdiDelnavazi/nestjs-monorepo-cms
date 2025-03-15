import { Module } from '@nestjs/common';
import { MockPaymentService } from './services/mockPayment.service';

@Module({
  controllers: [],
  providers: [MockPaymentService],
  exports: [MockPaymentService],
})
export class SharedModule {}
