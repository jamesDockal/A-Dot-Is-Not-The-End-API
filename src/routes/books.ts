import { Router } from "express";
import BooksController from "../controllers/Books";
import UsersMiddleware from "../middlewares/User";

const BooksRouter = Router();

const { getAllBooks } = new BooksController();

const { isLogged } = new UsersMiddleware();

BooksRouter.get("/", isLogged, getAllBooks);

export default BooksRouter;
