import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  PG_HOST: process.env.PG_HOST || "localhost",
  PG_PORT: Number(process.env.PG_PORT) || 5432,
  PG_USERNAME: process.env.PG_USERNAME || "postgres",
  PG_PASSWORD: process.env.PG_PASSWORD || "postgres",
  PG_DB: process.env.PG_DB || "library_db",
  PG_LOG: process.env.PG_LOG === "true",
  PG_SYNC: process.env.PG_SYNC === "true",
};
