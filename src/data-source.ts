import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [`../**/entities/*.{ts, js}`],
  migrations: [`/../**/migrations/*.{ts, js}`],
});
