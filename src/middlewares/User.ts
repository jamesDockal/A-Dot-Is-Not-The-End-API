import { Request, Response, NextFunction } from "express";

class UsersMiddleware {
  registerCrendentials(req: Request, res: Response, next: NextFunction) {
    const { password, email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "No email provided!" });
    }

    if (!password) {
      return res.status(400).json({ error: "No password provided!" });
    }
    return next();
  }
}

export default UsersMiddleware;
