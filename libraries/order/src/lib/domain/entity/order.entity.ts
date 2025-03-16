import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Generated,
} from 'typeorm';
import { OrderInterface } from '@nestjs-cms/order';
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

  @Column({ default: 'pending' })
  status: string;

  @Column({ nullable: true }) // Add this field
  transactionId: string;

  @ManyToOne('Customer', 'orders')
  customer: CustomerInterface;
}
