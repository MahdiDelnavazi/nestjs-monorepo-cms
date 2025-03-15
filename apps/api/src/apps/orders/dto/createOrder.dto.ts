import { IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  productName: string;

  @IsNumber()
  amount: number;

  @IsUUID()
  customerId: string;
}
