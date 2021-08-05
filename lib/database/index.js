"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
const dotenv = require("dotenv");

dotenv.config({
  path: ".env.local",
});

typeorm_1.createConnection({
  type: "postgres",
  ssl: { rejectUnauthorized: false },
  url: process.env.DATABASE_URL,
  migrations: ["lib/database/migrations/*.js"],
  entities: ["lib/entities/*.js"],
  cli: {
    migrationsDir: "lib/database/migrations",
    entitiesDir: "lib/entities",
  },
});
