import { Request, Response } from "express";
import { getRepository } from "typeorm";
import BookEntity from "../entities/BookEntity";

class BooksController {
  async getAllBooks(req: Request, res: Response) {
    const booksRepository = await getRepository(BookEntity);

    const books = await booksRepository.find();

    return res.send({ books });
  }
}

export default BooksController;
