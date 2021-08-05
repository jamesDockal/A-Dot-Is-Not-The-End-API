import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import BookEntity from "../entities/BookEntity";

class BooksMiddleware {
  async bookCredentials(req: Request, res: Response, next: NextFunction) {
    const { title, chapters } = req.body;

    if (!title) {
      return res.status(400).json({ error: "No title provided!" });
    }

    if (!chapters) {
      return res.status(400).json({ error: "No chapters provided!" });
    }

    if (!chapters.length || !Array.isArray(chapters)) {
      return res
        .status(400)
        .json({ error: "The chapters must be an array of objects" });
    }

    try {
      chapters.forEach((chapter) => {
        if (!chapter.title || !chapter.content) {
          throw new Error(
            "Each chapter must have the key 'title' and 'content'"
          );
        }
      });
    } catch (error) {
      return res.status(400).json({
        error: error.message,
      });
    }
    return next();
  }
  async titleInUse(req: Request, res: Response, next: NextFunction) {
    const { title } = req.body;

    const booksRepository = await getRepository(BookEntity);
    const book = await booksRepository.findOne({ title });

    if (book) {
      return res.status(400).json({
        error: "The title of the book is alredy in use",
      });
    }
    return next();
  }
}

export default BooksMiddleware;
