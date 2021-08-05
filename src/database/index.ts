import { createConnection } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: process.env.POSTGRESS_PASSWORD,
  database: "testes",
  migrations: ["lib/database/migrations/*.js"],
  entities: ["lib/entities/*.js"],
  cli: {
    migrationsDir: "lib/database/migrations",
    entitiesDir: "lib/entities",
  },
  synchronize: false,
});
