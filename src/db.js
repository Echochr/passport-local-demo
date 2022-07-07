import dotenv from 'dotenv';
dotenv.config();

import pg from 'pg';

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

export default pool;