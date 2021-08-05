"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Books_1 = __importDefault(require("../controllers/Books"));
var Book_1 = __importDefault(require("../middlewares/Book"));
var User_1 = __importDefault(require("../middlewares/User"));
var BooksRouter = express_1.Router();
var _a = new Books_1.default(), getAllBooks = _a.getAllBooks, createBook = _a.createBook, findByTitle = _a.findByTitle;
var _b = new Book_1.default(), bookCredentials = _b.bookCredentials, titleInUse = _b.titleInUse;
var isLogged = new User_1.default().isLogged;
BooksRouter.get("/", isLogged, getAllBooks);
// get book by title
BooksRouter.get("/:title", isLogged, findByTitle);
// create book
BooksRouter.post("/", isLogged, bookCredentials, titleInUse, createBook);
exports.default = BooksRouter;
