import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_NAME as string, process.env.DATABASE_USER as string, process.env.DATABASE_PASS as string, {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    dialect: 'postgres',
  });

export default sequelize;
