import { Router } from "express";
import BooksController from "../controllers/Books";
import BooksMiddleware from "../middlewares/Book";
import UsersMiddleware from "../middlewares/User";

const BooksRouter = Router();

const { getAllBooks, createBook } = new BooksController();

const { bookCredentials } = new BooksMiddleware();

const { isLogged } = new UsersMiddleware();

BooksRouter.get("/", isLogged, getAllBooks);

// create book
BooksRouter.post("/", isLogged, bookCredentials, createBook);

export default BooksRouter;
