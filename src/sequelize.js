import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOSTNAME = process.env.DB_HOSTNAME;
const DB_PORT = process.env.DB_PORT;
const DB_DATABASE = process.env.DB_DATABASE;

const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD, {
        dialect: 'postgres',
        host: DB_HOSTNAME,
        port: DB_PORT,
    },
);

export default sequelize;
