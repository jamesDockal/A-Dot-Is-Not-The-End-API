import { Request, Response } from "express";
import { getRepository } from "typeorm";
import BookEntity from "../entities/BookEntity";

class BooksController {
  async getAllBooks(req: Request, res: Response) {
    const booksRepository = await getRepository(BookEntity);

    const books = await booksRepository.find();

    return res.send({ books });
  }

  async createBook(req: Request, res: Response) {
    try {
      const { title, chapters } = req.body;

      const booksRepository = await getRepository(BookEntity);

      const book = await booksRepository.create({
        title,
        chapters,
      });

      await booksRepository.save(book);

      return res.send({ book });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}

export default BooksController;
