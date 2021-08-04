import { Request, Response, NextFunction } from "express";

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
}

export default BooksMiddleware;
