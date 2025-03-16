import { IsString, IsNumber, IsUUID, IsDefined } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsDefined()
  productName: string;

  @IsNumber()
  @IsDefined()
  amount: number;

  @IsUUID()
  @IsDefined()
  customerId: string;
}
