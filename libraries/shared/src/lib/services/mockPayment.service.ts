import { Injectable } from '@nestjs/common';
import { PaymentService } from '@nestjs-cms/shared';

@Injectable()
export class MockPaymentService implements PaymentService {
  async processPayment(amount: number, currency: string) {
    // Simulate a payment process
    return { success: true, transactionId: 'txn_123456' };
  }
}
