import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '@nestjs-cms/customer';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column('decimal')
  amount: number;

  @Column({ default: 'pending' })
  status: string;

  @Column({ nullable: true }) // Add this field
  transactionId: string;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
}
