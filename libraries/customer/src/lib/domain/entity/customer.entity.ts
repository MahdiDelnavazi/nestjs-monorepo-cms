import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Generated,
} from 'typeorm';
import { CustomerInterface } from '@nestjs-cms/customer';
import { OrderInterface } from '@nestjs-cms/order';

@Entity()
export class Customer implements CustomerInterface {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
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
