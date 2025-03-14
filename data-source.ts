import { DataSource } from 'typeorm';
import { Customer } from './libraries/customer/src';
import { Order } from './libraries/order/src'; // Load environment variables from .env

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432, // Fix: Ensure DB_PORT is a string
  username: process.env.DB_USERNAME || 'your_db_username',
  password: process.env.DB_PASSWORD || 'your_db_password',
  database: process.env.DB_NAME || 'customer_management',
  entities: [Customer, Order],
  migrations: ['migrations/*.ts'],
  synchronize: false,
});
