import { createConnection } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

createConnection({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  migrations: ["lib/database/migrations/*.js"],
  entities: ["lib/entities/*.js"],
  cli: {
    migrationsDir: "lib/database/migrations",
    entitiesDir: "lib/entities",
  },
  synchronize: false,
});
