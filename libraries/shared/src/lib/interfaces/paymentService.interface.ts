export interface PaymentService {
  processPayment(
    amount: number,
    currency: string
  ): Promise<{ success: boolean; transactionId: string }>;
}
