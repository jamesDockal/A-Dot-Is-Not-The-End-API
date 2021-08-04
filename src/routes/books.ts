import { Router } from "express";
import BooksController from "../controllers/Books";
import BooksMiddleware from "../middlewares/Book";
import UsersMiddleware from "../middlewares/User";

const BooksRouter = Router();

const { getAllBooks, createBook } = new BooksController();

const { bookCredentials, titleInUse } = new BooksMiddleware();

const { isLogged } = new UsersMiddleware();

BooksRouter.get("/", isLogged, getAllBooks);

// create book
BooksRouter.post("/", isLogged, bookCredentials, titleInUse, createBook);

export default BooksRouter;
