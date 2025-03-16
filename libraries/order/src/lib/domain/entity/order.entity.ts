import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Generated,
} from 'typeorm';
import { OrderInterface, OrderPaymentStatus } from '@nestjs-cms/order';
import { CustomerInterface } from '@nestjs-cms/customer';

@Entity()
export class Order implements OrderInterface {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column()
  productName: string;

  @Column('decimal')
  amount: number;

  @Column({ default: OrderPaymentStatus.NotPaid })
  status: OrderPaymentStatus;

  @Column({ nullable: true })
  transactionId: string;

  @ManyToOne('Customer', 'orders')
  customer: CustomerInterface;
}
