const dotenv = require("dotenv");
dotenv.config({
  path: ".env.local",
});

console.log("teste:", process.env.DATABASE_URL);
console.log("teste:", process.env.TESTE);
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  migrations: ["lib/database/migrations/*.js"],
  entities: ["lib/entities/*.js"],
  cli: {
    migrationsDir: "lib/database/migrations",
    entitiesDir: "lib/entities",
  },
};
// module.exports = {
//   type: "postgres",
//   host: "localhost",
//   username: "postgres",
//   database: "testes",
//   password: "123arvore",
//   migrations: ["lib/database/migrations/*.js"],
//   entities: ["lib/entities/*.js"],
//   cli: {
//     migrationsDir: "lib/database/migrations",
//     entitiesDir: "lib/entities",
//   },
// };
