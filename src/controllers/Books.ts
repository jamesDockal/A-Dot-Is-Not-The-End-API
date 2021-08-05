import { Request, Response } from "express";
import { getRepository } from "typeorm";
import BookEntity from "../entities/BookEntity";

class BooksController {
  async getAllBooks(req: Request, res: Response) {
    try {
      const booksRepository = await getRepository(BookEntity);

      const books = await booksRepository.find();

      return res.send({ books });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
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

  async findByTitle(req: Request, res: Response) {
    const { title } = req.params;

    const booksRepository = await getRepository(BookEntity);
    const book = await booksRepository.findOne({ title });
    if (!book) {
      return res.status(400).json({
        error: "Book not found",
      });
    }

    return res.json({ book });
  }
}

export default BooksController;
