import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CustomerInterface } from '@nestjs-cms/customer';
import { OrderInterface } from '@nestjs-cms/order';

@Entity()
export class Customer implements CustomerInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany('Order', 'customer')
  orders: OrderInterface[];

  constructor(partial: Partial<Customer>) {
    Object.assign(this, partial);
  }
}
