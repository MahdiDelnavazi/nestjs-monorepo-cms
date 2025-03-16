import 'dotenv/config';
import * as process from 'process';

export const Config = {
  Postgresql: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: +process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  },

  JWT_SECRET: process.env.JWT_SECRET,
  PORT: +process.env.PORT || 3000,
};
