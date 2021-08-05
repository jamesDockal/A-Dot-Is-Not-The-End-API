import express from "express";
import UsersRouter from "./routes/users";

import "./database";
console.log();

import BooksRouter from "./routes/books";

import dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});
console.log("PORT", process.env.PORT);

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("ok"));

app.use("/users", UsersRouter);
app.use("/books", BooksRouter);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server Running on port ${process.env.PORT || 3000}`)
);
