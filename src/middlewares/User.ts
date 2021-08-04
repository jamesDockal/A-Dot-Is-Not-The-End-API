import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import UserEntity from "../entities/UserEntity";

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
  async userAlredyRegistered(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const userRepository = await getRepository(UserEntity);
    const user = await userRepository.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "Email alredy in use!" });
    }

    return next();
  }
  async userExists(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;

    const userRepository = await getRepository(UserEntity);
    const user = await userRepository.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.locals.user = user;

    return next();
  }
}

export default UsersMiddleware;
