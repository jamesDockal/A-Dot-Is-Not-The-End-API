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
    return next();
  }
}

export default BooksMiddleware;
