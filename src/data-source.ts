import { DataSource } from "typeorm";
import { User } from "./entities/user";
import { Book } from "./entities/book";
import { Borrow } from "./entities/borrow";
import { env } from "./config/envConfig";

export const dataSource = new DataSource({
  type: "postgres",
  host: env.PG_HOST,
  port: env.PG_PORT,
  username: env.PG_USERNAME,
  password: env.PG_PASSWORD,
  database: env.PG_DB,
  synchronize: env.PG_SYNC,
  logging: env.PG_LOG,
  entities: [User, Book, Borrow],
});

export default dataSource;
