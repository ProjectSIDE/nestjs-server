import dotenv from 'dotenv';

dotenv.config();

export const PostgresConfig = {
  type: "postgres",
  host: process.env.DB_SERVER_HOST,
  port: Number(process.env.DB_SERVER_PORT),
  username: process.env.DB_SERVER_USERNAME,
  password: process.env.DB_SERVER_PASSWORD,
  database: process.env.DB_SERVER_DATABASE,
};

