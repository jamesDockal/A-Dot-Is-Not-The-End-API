import { Request, Response } from "express";

class UsersController {
  async register(req: Request, res: Response) {
    return res.json({ users: "ok" });
  }
}

export default UsersController;
