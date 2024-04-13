import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book } from "../src/entities/Book";


export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Book],
  migrations: [`/../**/migrations/*.{ts, js}`],
});
