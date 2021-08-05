"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
typeorm_1.createConnection({
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
