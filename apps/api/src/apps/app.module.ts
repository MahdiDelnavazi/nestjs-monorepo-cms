import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Config } from '../../../../libraries/shared/src/lib/config';
import * as path from 'node:path';
import { Customer } from '@nestjs-cms/customer';
import { Order } from '@nestjs-cms/order';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: Config.Postgresql.DB_HOST,
        port: Config.Postgresql.DB_PORT,
        username: Config.Postgresql.DB_USERNAME,
        password: Config.Postgresql.DB_PASSWORD,
        database: Config.Postgresql.DB_NAME,
        entities: [Customer, Order],
        synchronize: true,
      }),
    }),
    CustomersModule,
    OrdersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
