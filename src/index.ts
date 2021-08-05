import express from "express";
import UsersRouter from "./routes/users";

// import "./database";
import BooksRouter from "./routes/books";

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("ok"));

// app.use("/users", UsersRouter);
// app.use("/books", BooksRouter);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);
